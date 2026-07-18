import { createConnection , closeConnection} from "@/components/lib/db";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { first_name, last_name, email, number, password } = req.body;

      // Create a connection to the database
      const db = await createConnection();

      const checkEmailSql = "SELECT * FROM users WHERE email = ?";
      const [existingUser] = await db.query(checkEmailSql, [email]); // Destructure the result

      if (existingUser && existingUser.length > 0) {
        // If the email already exists, return an error
        return res.status(400).json({
          success: false,
          message: "User already exists",
          status: 1,
        });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const sql =
        "INSERT INTO users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)";
      const values = [first_name, last_name, email, number, hashedPassword];

      console.log(values);

      await db.query(sql, values);

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
        to: email,
        subject: "Thank You for Registering!",
        text: "Thank you for registering on the AKCJ Capital website!",
        html: `
          <h1>Welcome to AKCJ Capital!</h1>
          <p>Dear ${first_name}${' '}${last_name},</p>
          <p>Thank you for registering on the AKCJ Capital website! We are thrilled to have you on board and look forward to assisting you with our financial services.</p>
          <p>With your account, you now have access to:</p>
          <ul>
              <li>Personalized financial tools</li>
              <li>Expert insights and resources</li>
              <li>Exclusive offers and updates</li>
          </ul>
          <p>If you have any questions or need assistance, our team is here to help. Feel free to contact us at <a href="mailto:support@akcjcapital.com">support@akcjcapital.com</a> or visit our <a href="https://akcjcapital.com/help-center">Help Center</a>.</p>
          <p>Stay tuned for updates and opportunities designed to help you achieve your financial goals.</p>
          <p>Welcome to the AKCJ Capital community!</p>
          <p>Best regards,</p>
          <p><strong>The AKCJ Capital Team</strong></p>
          <div>
              <p>&copy; 2024 AKCJ Capital. All rights reserved.</p>
          </div>
        `,
      };
      
      try {
        await transporter.verify();

        await transporter.sendMail(mailOptions);

        res.status(200).json({
          success: true,
          message: "Register Success",
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
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Something went wrong", status: 1 });
    } 
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
