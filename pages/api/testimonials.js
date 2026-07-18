import { createConnection , closeConnection} from "@/components/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await createConnection();

      const quary = 'SELECT * FROM testimonials'

      const [testimonial] = await connection.execute(quary);

       // Assuming the photo column contains the file name or relative path
       const baseURL = process.env.BASE_URL || 'https://xcoder.a2hosted.com/AKCJ-admin/uploads/testimonials_photo/'; // Adjust this URL as needed
      
       const testimonials = testimonial.map(member => {
         const updatedMember = {
           ...member,
           image: baseURL + member.photo,  // Add full photo URL

         };
       
         // Remove the 'photos' and 'image' fields
         delete updatedMember.photo;
       
         return updatedMember;
       });

      res.status(200).json({ success: true, testimonials });

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