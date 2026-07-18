import { createConnection , closeConnection} from "@/components/lib/db";
import formidable from "formidable";

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

      console.log([fields.start] , "fields.start");
      

      if(fields.start == '' || fields.start == undefined ){
        return res.status(404).json({
          success: false,
          message: "No blogs found",
          status: 1,
        });
      }

      // Pagination parameters
      const page = parseInt(fields.start, 10) || 0; // Default to page 0 if not provided
      const Blogsize = 12; // Number of records per page
      const offset = page * Blogsize;

      const db = await createConnection();

      // Get total count of blogs
      const countSql = "SELECT COUNT(*) as total FROM blogs";
      const [countResult] = await db.query(countSql);
      const totalCount = countResult[0].total;

      // Fetch paginated blogs
      const fetchBlogsSql = "SELECT * FROM blogs LIMIT ? OFFSET ?";
      const [allBlogs] = await db.query(fetchBlogsSql, [Blogsize, offset]);

      // Check if blogs are found
      if (allBlogs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No blogs found",
          status: 1,
        });
      }

      const baseURL = 'https://xcoder.a2hosted.com/AKCJ-admin/Images/Blog_Images/';

      const blogs = allBlogs.map(blogs => {
        const updatedMember = {
          ...blogs,
          image: baseURL + blogs.image,  // Add full photo URL

        };
              
        return updatedMember;
      });

      res.status(200).json({
        success: true,
        message: "success",
        status: 0,
        data: blogs,
        pagination: {
          totalCount: totalCount,
          page,
          Blogsize,
          totalBlogs: Math.ceil(totalCount / Blogsize),
        },
      });

      await closeConnection()

    } catch (error) {
      console.error("Error fetching blogs:", error);
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
