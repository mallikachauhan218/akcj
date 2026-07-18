import { createConnection, closeConnection } from "@/components/lib/db";
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

      const email = fields.email;

      const db = await createConnection();

      const addsqlurl = "INSERT INTO newsletter (email) VALUES (?)";
      const checkEmail = "SELECT * FROM newsletter WHERE email = ?";

      const [ExestingEmail] = await db.query(checkEmail, [email]);

      if (ExestingEmail.length == 0) {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST, 
          port: parseInt(process.env.EMAIL_PORT, 10),
          secure: process.env.EMAIL_PORT === "465",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // const mailOptions = {
        //   from: process.env.EMAIL_FROM,
        //   to: email,
        //   subject: "Thank You for Subscribing!",
        //   text: "Thank you for subscribing to our newsletter. Stay tuned for updates!",
        //   html: "<p>Thank you for subscribing to our newsletter. Stay tuned for updates!</p>",
        // };

        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "Thank You for Registering with AKCJ Capital!",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            
              <P>Dear</p>

              <p>Thank you for registering with <strong>AKCJ Capital.</strong> We aim to help serious investors to make sustainable wealth <br> backed by data-driven intensive research. </p>
              
              <p>What to expect after free registration :</p>

                <p>📈 <strong>Access to Blog Section:</strong> Newsletters on key takeaways from management interactions.</p>
                
                <p><strong>Notifications</strong> regarding free webinars & other updates</p>
         
              <p>You can get more details about our <strong>research</strong> at the <a href="https://akcj.vercel.app/product-and-services" style="color: #0073e6;">Products and Pricing</a> section.</p>
              
              <p>You can follow us on social media for regular research insights: </p>
            
                <p><strong>Instagram : - </strong><a href="https://www.instagram.com/akcjcapital/" style="color: #0073e6;">ttps://www.instagram.com/akcjcapital/</a></p>

                <p><strong>Linkedin : - </strong><a href="https://www.linkedin.com/company/104794069/admin/dashboard/" style="color: #0073e6;">https://www.linkedin.com/company/104794069/admin/dashboard/</a></p>

                <p><strong>Twitter : - </strong><a href="TWITTER_LINK" style="color: #0073e6;">Twitter</a></p>

                <p><strong>Facebook : - </strong><a href="https://www.facebook.com/people/AKCJ-Capital/61566185276487/" style="color: #0073e6;">https://www.facebook.com/people/AKCJ-Capital/61566185276487/</a></p>
                          
              <p>For all your questions/queries our support is available at <a href="mailto:hello@akcjcapital.com" style="color: #0073e6;"><strong>hello@akcjcapital.com</strong></a> (Monday to Friday between 9:30 am - 6pm)</p>

              <p>Regards,</p>
              <p>Team AKCJ</p>

              <p><strong>AKCJ Capital</strong></p>
            </div>
          `,
        };

        try {
          await transporter.verify();

          await transporter.sendMail(mailOptions);

          const [addNewsLatter] = await db.query(addsqlurl, [email]);

          res.status(200).json({
            success: true,
            message: "Email successfully added.",
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
      } else {
        res.status(200).json({
          success: false,
          message: "The email has already been taken.",
          status: 1,
        });
      }

      await closeConnection();
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
