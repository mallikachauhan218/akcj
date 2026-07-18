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

  // Helper function to parse the form using formidable
  const parseForm = (req) =>
    new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

  try {
    // Parse the form data
    const { fields } = await parseForm(req);
    console.log("Parsed fields:", fields);

    const key = fields.keyword;

    if (!key) {
      return res.status(400).json({
        success: false,
        message: "Keyword is required",
        status: 1,
      });
    }

    const likeKeyword = `%${key}%`;

    // Establish a database connection
    const db = await createConnection();

    try {
      // Execute the queries in parallel
      const [Blogs, Faq, Packages] = await Promise.all([
        db.query(
          "SELECT id, title, description FROM blogs WHERE title LIKE ? OR description LIKE ?",
          [likeKeyword, likeKeyword]
        ).then(([rows]) => rows),
        db.query(
          "SELECT id, heading, description FROM faqs WHERE heading LIKE ? OR description LIKE ?",
          [likeKeyword, likeKeyword]
        ).then(([rows]) => rows),
        db.query(
          "SELECT id, name, description FROM packages WHERE name LIKE ? OR description LIKE ?",
          [likeKeyword, likeKeyword]
        ).then(([rows]) => rows),
      ]);

      console.log(Blogs);
      console.log(Faq);
      console.log(Packages);
      
      // Respond with the result
      res.status(200).json({
        success: true,
        message: "success",
        status: 0,
        Blogs: Blogs || [],
        Faq: Faq || [],
        Packages: Packages || [],
      });

    } catch (dbError) {
      console.error("Database query error:", dbError);
      res.status(500).json({
        success: false,
        message: "Error querying the database",
        status: 1,
      });
    } finally {
      // Ensure the database connection is closed
      try {
        await closeConnection();
      } catch (closeError) {
        console.error("Error closing the database connection:", closeError);
      }
    }
  } catch (formError) {
    console.error("Error parsing form:", formError);
    res.status(500).json({
      success: false,
      message: "Failed to process the request",
      status: 1,
    });
  }
}
