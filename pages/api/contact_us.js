import { createConnection , closeConnection } from "@/components/lib/db";
import formidable from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable();

    try {
      // Parse the multipart form data
      const { fields } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

      const ContactDetails = {
        first_name: fields.firstName,
        last_name: fields.lastName,
        company: fields.company,
        phone: fields.phone,
        comment: fields.comment,
      };

      const db = await createConnection();

      const addsqlurl =
        "INSERT INTO contact_us (first_name , last_name , company , phone , comment ) VALUES (? , ? , ? , ? , ?)";

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT, 10),
        secure: process.env.EMAIL_PORT === "465",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_AUN,
        subject: "Contact Us Form Submission",
        text: `Dear Admin,  

        You have received a new submission via the Contact Us form. Please find the details below:  

        First Name: ${ContactDetails.first_name}  
        Last Name: ${ContactDetails.last_name}  
        Company: ${ContactDetails.company}  
        Phone: ${ContactDetails.phone}  
        Comment: ${ContactDetails.comment}  

        We recommend reaching out to the submitter promptly to address their inquiry or comments.  

        Thank you,  
        Your Website Team  
        `,
        html: `
        <h1>New Contact Submission</h1>
        <p>Dear Admin,</p>
        <p>You have received a new submission via the Contact Us form. Please find the details below:</p>

        <ul>
        <li><strong>First Name:</strong> ${ContactDetails.first_name}</li>
        <li><strong>Last Name:</strong> ${ContactDetails.last_name}</li>
        <li><strong>Company:</strong> ${ContactDetails.company}</li>
        <li><strong>Phone:</strong> ${ContactDetails.phone}</li>
        <li><strong>Comment:</strong> ${ContactDetails.comment}</li>
        </ul>

        <p>We recommend reaching out to the submitter promptly to address their inquiry or comments.</p>
        <p>Thank you,<br>Your Website Team</p>

        `,
      };

      try {
        // Verify SMTP connection
        await transporter.verify();
        console.log("SMTP verified successfully.");

        // Send email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully.");

        await db.query(addsqlurl, [
          ContactDetails.first_name,
          ContactDetails.last_name,
          ContactDetails.company,
          ContactDetails.phone,
          ContactDetails.comment,
        ]);

        res.status(200).json({
          success: true,
          message: "Thank you! Your message sent.",
          status: 0,
        });
      } catch (smtpError) {
        console.error("Error sending email:", smtpError);
        res.status(500).json({
          success: false,
          message: "Failed to send email.",
          status: 1,
        });
      }

      await closeConnection()
      
    } catch (error) {
      // Catch any errors and return a generic error response
      console.error("Error fetching user:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        status: 1,
      });
    }
    
  } else {
    // Handle unsupported HTTP methods (only POST is allowed)
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
