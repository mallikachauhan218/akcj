import { createConnection, closeConnection } from "@/components/lib/db";
import formidable from "formidable";

// Disable bodyParser to use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  let db; // Define `db` at a higher scope for access in `finally`

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

      const checkIDSql = "SELECT * FROM profile_risk WHERE user_id = ?";
      const sql =
        "INSERT INTO profile_risk (user_id, risk1, risk2, risk3, risk4, risk5, risk6, risk7, risk8, risk9) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const updateSql =
        "UPDATE profile_risk SET risk1 = ?, risk2 = ?, risk3 = ?, risk4 = ?, risk5 = ?, risk6 = ?, risk7 = ?, risk8 = ?, risk9 = ? WHERE user_id = ?";

      const values = [
        fields.risk1,
        fields.risk2,
        fields.risk3,
        fields.risk4,
        fields.risk5,
        fields.risk6,
        fields.risk7,
        fields.risk8,
        fields.risk9,
        fields.user_id,
      ];

      // Check if user_id already exists in the profile_risk table
      const [existingRisk] = await db.query(checkIDSql, [id]);

      console.log("existingRisk", existingRisk);

      if (existingRisk && existingRisk.length > 0) {
        // Update the existing profile risk
        await db.query(updateSql, values);

        return res.status(200).json({
          success: true,
          message: "Risk-Profile updated successfully",
          status: 0,
        });
      } else {
        // Insert a new profile risk
        const insertValues = [
          fields.user_id,
          ...values.slice(0, -1), // Extract risk1 to risk9 values
        ];

        await db.query(sql, insertValues);

        return res.status(200).json({
          success: true,
          message: "Risk-Profile Add Successful",
          status: 0,
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Something went wrong", status: 1 });
    } finally {
      // Ensure the connection is always closed
      if (db) {
        await closeConnection();
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
