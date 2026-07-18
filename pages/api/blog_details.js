import { createConnection, closeConnection } from "@/components/lib/db";
import formidable from "formidable";
import Blog from "../blog/[...id]";

// Disable bodyParser to use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable();

    try {
      const { fields } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

      const id = fields.id;

      console.log(id);

      const db = await createConnection();

      const checkUserSql = "SELECT * FROM blogs WHERE id = ?";

      const [existingBlog] = await db.query(checkUserSql, [id]);

      if (existingBlog.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Blog not found",
          status: 1,
        });
      }

      const baseURL = 'https://xcoder.a2hosted.com/AKCJ-admin/Images/Blog_Images/';

      const blog_details = existingBlog.map(blogs => {

        const createdAtDate = new Date(blogs.date_posted);
        const options = { year: 'numeric', month: 'long' }; // Format to full month name and year
        const formattedDate = createdAtDate.toLocaleDateString('en-US', options);

        const updatedMember = {
          ...blogs,
          image: baseURL + blogs.image,  // Add full photo URL
          date_posted : formattedDate
        };
              
        return updatedMember;
      });

      // const blog_detail = existingBlog[0];

      console.log(blog_details);
      

      res.status(200).json({
        success: true,
        message: "success",
        status: 0,
        Blog_detail: blog_details[0],
      });

      await closeConnection();
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        status: 1,
      });
    } 
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
