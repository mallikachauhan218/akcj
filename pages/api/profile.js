import { createConnection, closeConnection } from "@/components/lib/db";
import formidable from "formidable";

// Disable bodyParser to use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const form = formidable();

  try {
    const { fields } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const id = fields.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required",
        status: 1,
      });
    }

    const db = await createConnection();

    try {
      // Execute all queries in parallel
      const [
        [existingUser],
        [profileRiskResults],
        [emailAlertsResults]
      ] = await Promise.all([
        db.query("SELECT * FROM users WHERE id = ?", [id]),
        db.query("SELECT * FROM profile_risk WHERE user_id = ?", [id]),
        db.query("SELECT * FROM email_alerts WHERE user_id = ?", [id])
      ]);

      if (existingUser.length === 0) {
        return res.status(404).json({
          success: false,
          message: "User not found",
          status: 1,
        });
      }

      // Extract data
      const user = existingUser[0];
      const profileRiskData = profileRiskResults[0] || null;
      const emailAlertsData = emailAlertsResults[0] || null;

      // Respond with consolidated data
      res.status(200).json({
        success: true,
        message: "User found",
        status: 0,
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone: user.phone,
        },
        Email_Alerts: emailAlertsData,
        Profile_Risk: profileRiskData,
      });
    } catch (error) {
      console.error("Database query error:", error);
      res.status(500).json({
        success: false,
        message: "Error querying the database",
        status: 1,
      });
    } finally {
      if (db) {
        try {
          await closeConnection();
        } catch (closeError) {
          console.error("Error closing the connection:", closeError);
        }
      }
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      status: 1,
    });
  }
}
