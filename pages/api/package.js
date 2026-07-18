import { createConnection , closeConnection} from "@/components/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await createConnection();

      const quary = 'SELECT * FROM packages'

      const [packages] = await connection.execute(quary);

      res.status(200).json({ success: true, packages });

      await closeConnection()

      
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
