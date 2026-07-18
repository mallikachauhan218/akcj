import { createConnection , closeConnection } from "@/components/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await createConnection();

      const quary = 'SELECT * FROM sample_report'

      const [Report] = await connection.execute(quary);

      const baseURL = 'https://xcoder.a2hosted.com/AKCJ-admin/uploads/samplereport/';

      const report = Report.map(rep => {
        const updatedMember = {
          ...rep,
          image: baseURL + rep.image,  // Add full photo URL

        };
              
        return updatedMember;
      });

      res.status(200).json({ success: true, report });

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
