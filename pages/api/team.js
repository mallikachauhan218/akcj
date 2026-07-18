// import { createConnection } from "@/components/lib/db";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     try {
//       const connection = await createConnection();

//       const quary = 'SELECT * FROM team'

//       const [team] = await connection.execute(quary);

//       res.status(200).json({ success: true, team });
//     } catch (error) { 
//       console.error("Database Error:", error);
//       res.status(500).json({ success: false, error: "Internal Server Error" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


import { createConnection , closeConnection } from "@/components/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await createConnection();

      const query = 'SELECT * FROM team';

      const [team] = await connection.execute(query);

      // Assuming the photo column contains the file name or relative path
      const baseURL = process.env.BASE_URL || 'https://xcoder.a2hosted.com/AKCJ-admin/uploads/photos/'; // Adjust this URL as needed
      const baseURL1 = process.env.BASE_URL || 'https://xcoder.a2hosted.com/AKCJ-admin/uploads/images/'; // Adjust this URL as needed

      const teamWithFullURL = team.map(member => {
        const updatedMember = {
          ...member,
          photo: baseURL + member.photos,  // Add full photo URL
          image: baseURL1 + member.image,  // Add full image URL
        };
      
        // Remove the 'photos' and 'image' fields
        delete updatedMember.photos;
      
        return updatedMember;
      });
      


      res.status(200).json({ success: true, team: teamWithFullURL });

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