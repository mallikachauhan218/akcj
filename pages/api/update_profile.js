import { createConnection , closeConnection } from "@/components/lib/db";
import bcrypt from "bcrypt";
import formidable from "formidable";

// Disable default body parser
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
          if (err) reject(err);
          resolve({ fields, files });
        });
      });

      const { id, fname, lname, phone, email, NewPassword } = fields;

      if (!id) {
        return res.status(400).json({ message: "ID is required", status: 1 });
      }

      const db = await createConnection();

      const checkid = "SELECT * FROM users WHERE id = ?";
      const updateQuery = `
        UPDATE users
        SET first_name = ?, last_name = ?, phone = ?, email = ?, password = COALESCE(?, password)
        WHERE id = ?
      `;

      // Check if the user exists
      const [checkedPerson] = await db.query(checkid, [id]);

      if (!checkedPerson || checkedPerson.length === 0) {
        return res.status(404).json({ message: "User not found", status: 1 });
      }

      let hashedPassword = null;

      // If a new password is provided, hash it
      if (NewPassword) {
        hashedPassword = await bcrypt.hash(NewPassword, 10);
      }

      // Perform the update
      await db.query(updateQuery, [
        fname || checkedPerson[0].first_name,
        lname || checkedPerson[0].last_name,
        phone || checkedPerson[0].phone,
        email || checkedPerson[0].email,
        hashedPassword, // Use the hashed password if provided, or keep the old one
        id,
      ]);

      // Send the success response
      res.status(200).json({ message: "User details updated successfully", status: 0 });
      console.log('connection was closed time ');
      
      
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Something went wrong", status: 1 });
    } finally{
      await closeConnection()
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
