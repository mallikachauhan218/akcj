import { createConnection, closeConnection } from "@/components/lib/db";
import formidable from "formidable";

// Disable bodyParser to use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  let db; // Define db at the top for use in the finally block

  if (req.method === "POST") {
    const form = formidable();

    try {
      const { fields } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

      console.log(fields, "fields");

      const id = fields.user_id;

      // Create a connection to the database
      db = await createConnection();

      const checkIDSql = "SELECT * FROM email_alerts WHERE user_id = ?";
      const insertSql =
        "INSERT INTO email_alerts (user_id, blog_update, promotons_offers, stoke_update) VALUES (?, ?, ?, ?)";
      const updateSql =
        "UPDATE email_alerts SET blog_update = ?, promotons_offers = ?, stoke_update = ? WHERE user_id = ?";

      const [checkIdData] = await db.query(checkIDSql, [id]);

      if (checkIdData && checkIdData.length > 0) {
        // Update the existing record
        const updateValues = [
          fields.blog_update,
          fields.promotons_offers,
          fields.stoke_update,
          fields.user_id,
        ];

        await db.query(updateSql, updateValues);

        return res.status(200).json({
          success: true,
          message: "Email-Alerts updated successfully",
          status: 0,
        });
      } else {
        // Insert a new record
        const insertValues = [
          fields.user_id,
          fields.blog_update,
          fields.promotons_offers,
          fields.stoke_update,
        ];

        await db.query(insertSql, insertValues);

        return res.status(200).json({
          success: true,
          message: "Email-Alerts Add Successful",
          status: 0,
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Something went wrong", status: 1 });
    } finally {
      // Always close the connection if it was successfully opened
      if (db) {
        await closeConnection();
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
