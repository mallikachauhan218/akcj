
import { createConnection, closeConnection } from "@/components/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await createConnection();

      const quary = 'SELECT updates.id, updates._stock_id, updates.file , updates.description , updates.created_at , updates.updated_at , stocks.name FROM updates INNER JOIN stocks ON updates._stock_id = stocks.id ORDER BY updates.id desc;'

      const [Update] = await connection.execute(quary);

      console.log(Update, 'Update');

      const baseURL = 'https://xcoder.a2hosted.com/AKCJ-admin/uploads/report/';

      const recent_update = Update.map(blogs => {
        // Format created_at to get the full month name and year
        const createdAtDate = new Date(blogs.created_at);
        const options = { year: 'numeric', month: 'long' }; // Format to full month name and year
        const formattedDate = createdAtDate.toLocaleDateString('en-US', options);

        const updatedMember = {
          ...blogs,
          file: baseURL + blogs.file, // Add full photo URL
          created_at: formattedDate, // Add formatted date
        };

        return updatedMember;
      });

      res.status(200).json({ success: true, recent_update });

      await closeConnection();

    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
