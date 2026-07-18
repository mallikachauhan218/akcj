import { createConnection , closeConnection} from "@/components/lib/db"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import Login from "../login";
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
     
      const { email, password } = req.body;

      const db = await createConnection();

      const checkEmailSql = "SELECT * FROM users WHERE email = ?";
      const [existingUser] = await db.query(checkEmailSql, [email]);

      const token = jwt.sign(
        { id: existingUser.id, email: existingUser.email },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
      );

      if (!existingUser || existingUser.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Email not found",
          status: 1,
        });
      }

      const isPasswordCorrect = await bcrypt.compare(password, existingUser[0].password);

      
      if (!isPasswordCorrect) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
          status: 1,
        });
      }

      console.log("existingUser" , existingUser);
      // console.log([existingUser[0]._package_id]);
      if(existingUser[0]._package_id !== null){
        const packageIdArray = existingUser[0]._package_id.split(',').map(Number);
        res.status(200).json({
          success: true,
          message: "Login successful",
          status: 0,
          user: {
            id: existingUser[0].id,
            first_name: existingUser[0].first_name,
            last_name: existingUser[0].last_name,
            email: existingUser[0].email,
            token : token,
            package_id : packageIdArray
          },
        });
      }else{
        res.status(200).json({
          success: true,
          message: "Login successful",
          status: 0,
          user: {
            id: existingUser[0].id,
            first_name: existingUser[0].first_name,
            last_name: existingUser[0].last_name,
            email: existingUser[0].email,
            token : token,
            package_id : []
          },
        });
      }

      console.log(packageIdArray);
      

      // If the email and password are correct, return a success response with user details
      res.status(200).json({
        success: true,
        message: "Login successful",
        status: 0,
        user: {
          id: existingUser[0].id,
          first_name: existingUser[0].first_name,
          last_name: existingUser[0].last_name,
          email: existingUser[0].email,
          token : token,
          package_id : []
        },
      });

      await closeConnection()
      
    } catch (error) {
      // Catch any errors and return a generic error response
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Something went wrong", status: 1 });
    } finally {
     
    }
  } else {
    // Handle unsupported HTTP methods (only POST is allowed)
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
