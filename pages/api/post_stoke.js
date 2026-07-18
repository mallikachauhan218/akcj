import { createConnection , closeConnection } from "@/components/lib/db";
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
      // Parse the multipart form data
      const { fields } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

      console.log(fields); // Log the parsed fields
      
      const id = fields.packege_id;



      console.log(id, "id");

    //   if (!id) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "ID is required",
    //       status: 1,
    //     });
    //   }

      const db = await createConnection();

      const checkUserSql = "SELECT * FROM stocks WHERE _package_id = ?";
      const [existingUser] = await db.query(checkUserSql, [id]);

      console.log([existingUser]);

      if (existingUser.length === 0) {
        return res.status(404).json({
          success: false,
          message: "User not found",
          status: 1,
        });
      }

      // If user is found, return the user details in the response
      const stokck = existingUser; // Extract the first user

      res.status(200).json({
        success: true,
        message: "success",
        status: 0,
        stock: stokck,
      });

      await closeConnection()
    } catch (error) {
      // Catch any errors and return a generic error response
      console.error("Error fetching user:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        status: 1,
      });
    } 
  } else {
    // Handle unsupported HTTP methods (only POST is allowed)
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
