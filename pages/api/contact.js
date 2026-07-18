import { createConnection , closeConnection } from "@/components/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, number, message } = req.body;

      // Save the data to the database
      const db = await createConnection();
      const sql = "INSERT INTO contact (name, email, number, message) VALUES (?, ?, ?, ?)";
      const values = [name, email, number, message];

      await db.query(sql, values);

      res.status(200).json({ success: true, message: "Data saved successfully" });

      await closeConnection()
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
