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

      const checkUserSql = "SELECT * FROM team WHERE id = ?";

      const [existingMember] = await db.query(checkUserSql, [id]);

      if (existingMember.length === 0) {
        return res.status(200).json({
          success: false,
          message: "Member not found",
          status: 1,
        });
      }



      const baseURL =  'https://xcoder.a2hosted.com/AKCJ-admin/uploads/photos/'; // Adjust this URL as needed
      const baseURL1 = 'https://xcoder.a2hosted.com/AKCJ-admin/uploads/images/';

      const member_details = existingMember.map(member => {

        const updatedMember = {
          ...member,
          photos: baseURL + member.photos,  // Add full photo URL
          image: baseURL1 + member.image, 
        };
              
        return updatedMember;
      });

      // const blog_detail = existingBlog[0];

      console.log(member_details);
      

      res.status(200).json({
        success: true,
        message: "success",
        status: 0,
        Member: member_details[0],
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
