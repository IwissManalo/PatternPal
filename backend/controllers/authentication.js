require('dotenv').config();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const db = require('../mysql/dbCon');
const usersController = require('./usersController');

// In-memory store for OTPs and pending user data - in production, use a persistent store like Redis or DB
const otpStore = new Map();
const pendingUsers = new Map();

// Configure nodemailer transporter (example using Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // email stored in environment variable
    pass: process.env.EMAIL_PASS  // password stored in environment variable
  }
});

// Generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP email
async function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: process.env.EMAIL_USER, // use email from environment variable
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`
  };

  await transporter.sendMail(mailOptions);
}

// Create and send OTP and store pending user data
exports.createAndSendOTPWithUser = async (req, res) => {
  const { first_name, last_name, username, email, password, phone_number, account_role, user_credit } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const otp = generateOTP();
  otpStore.set(email, { otp, expiresAt: Date.now() + 10 * 60 * 1000 }); // expires in 10 minutes
  pendingUsers.set(email, { first_name, last_name, username, email, password, phone_number, account_role, user_credit });
  try {
    await sendOTPEmail(email, otp);
    console.log(`OTP sent successfully to ${email}. OTP: ${otp}`); // Log success with OTP
    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ error: 'Failed to send OTP email' });
  }
};

// Verify OTP and finalize user registration
exports.verifyOTPAndRegister = (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore.get(email);
  if (!record) {
    return res.status(400).json({ success: false, message: 'OTP not found or expired' });
  }
  if (record.expiresAt < Date.now()) {
    otpStore.delete(email);
    pendingUsers.delete(email);
    return res.status(400).json({ success: false, message: 'OTP expired' });
  }
  if (record.otp !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
  otpStore.delete(email);
  const userData = pendingUsers.get(email);
  if (!userData) {
    return res.status(400).json({ success: false, message: 'User data not found for this email' });
  }
  pendingUsers.delete(email);
  // Insert user into database
  const sql = 'INSERT INTO users (first_name, last_name, username, email, password, phone_number, account_role, user_credit) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [userData.first_name, userData.last_name, userData.username, userData.email, userData.password, userData.phone_number, userData.account_role, userData.user_credit];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ success: false, message: 'Failed to register user' });
    }
    res.status(201).json({ success: true, message: 'User registered successfully', userId: result.insertId });
  });
};
