import pool from "../db.js";
import bcrypt from "bcrypt";
import jvt from "jsonwebtoken";
import nodemailer from "nodemailer";
import axios from "axios";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
exports.signup = async(res, req) => {
    try {
        const { email, password, captchaToken } = req.body;
         const captchaVerify = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: captchaToken,
        },
      }
    );

    if (!captchaVerify.data.success) {
      return res.status(400).json({ message: "Captcha failed" });
    }
     const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    const query = `
      INSERT INTO users (email, password, otp, otp_expiry)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;
      await pool.query(query, [email, hashedPassword, otp, otpExpiry]);

    // ----------------------------
    // TIER 2: Send OTP
    // ----------------------------
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Comic Bee OTP",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    res.status(200).json({ message: "OTP sent to email" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
};


// 🔹 VERIFY OTP
exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const result = await pool.query(
      `SELECT * FROM users WHERE email=$1`,
      [email]
    );

    if (result.rows.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = result.rows[0];

    if (user.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    if (new Date() > user.otp_expiry)
      return res.status(400).json({ message: "OTP expired" });

    await pool.query(
      `UPDATE users SET is_verified=true, otp=null, otp_expiry=null WHERE email=$1`,
      [email]
    );

    res.json({ message: "Account verified successfully" });

  } catch (error) {
    res.status(500).json({ message: "Verification failed" });
  }
};