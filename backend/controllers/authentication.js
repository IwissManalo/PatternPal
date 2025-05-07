const nodemailer = require('nodemailer');
const crypto = require('crypto');

// In-memory store for OTPs - in production, use a persistent store like Redis or DB
const otpStore = new Map();

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

// Create and send OTP
exports.createAndSendOTP = async (email) => {
  const otp = generateOTP();
  otpStore.set(email, { otp, expiresAt: Date.now() + 10 * 60 * 1000 }); // expires in 10 minutes
  await sendOTPEmail(email, otp);
};

// Verify OTP
exports.verifyOTP = (email, otp) => {
  const record = otpStore.get(email);
  if (!record) {
    return { success: false, message: 'OTP not found or expired' };
  }
  if (record.expiresAt < Date.now()) {
    otpStore.delete(email);
    return { success: false, message: 'OTP expired' };
  }
  if (record.otp !== otp) {
    return { success: false, message: 'Invalid OTP' };
  }
  otpStore.delete(email);
  return { success: true, message: 'OTP verified successfully' };
};
