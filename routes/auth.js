import express from "express";
import bcrypt from "bcrypt";
import axios from "axios";
import nodemailer from "nodemailer";
import pool from "../db.js";
const router = express.Router();
const transporter = nodemailer.createTransport({
    service: "gmail",
     auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});
router.post("/signup", async (req, res) => {
  try {
    const { email, password, recaptchaToken } = req.body;
    const recaptcha = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: recaptchaToken,
        },
      }
    );
    if (!recaptcha.data.success) {
      return res.status(400).json({ message: "CAPTCHA failed" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000);

    await pool.query(
      `INSERT INTO users(email,password,otp,otp_expiry)
       VALUES($1,$2,$3,$4)`,
      [email, hashedPassword, otp, expiry]
    );
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Comic Bee - Verify Your Account",
      text: `Your OTP is ${otp}. Valid for 10 minutes.`,
    });

    res.json({ message: "OTP sent to email" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Signup error" });
  }
});
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  const user = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );
  if (!user.rows.length)
    return res.status(400).json({ message: "User not found" });

  const dbUser = user.rows[0];

  if (dbUser.otp !== otp)
    return res.status(400).json({ message: "Invalid OTP" });

  if (new Date() > dbUser.otp_expiry)
    return res.status(400).json({ message: "OTP expired" });

  await pool.query(
    "UPDATE users SET is_verified=true, otp=NULL WHERE email=$1",
    [email]
  );

  res.json({ message: "Account verified successfully" });
});

module.exports = router;