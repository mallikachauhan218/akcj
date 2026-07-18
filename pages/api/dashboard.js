import { createConnection  , closeConnection} from "@/components/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await createConnection();

      const [Video_data] = await connection.execute("SELECT * FROM videos");

      res.status(200).json({ success: true, Videos: Video_data });

      await closeConnection()
      
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } finally {
     
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
