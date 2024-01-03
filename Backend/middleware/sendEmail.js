const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  service: process.env.SERVICE,
  port: Number(process.env.EMAIL_PORT),
  secure: Boolean(process.env.SECURE),
  requireTLS: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});
const sendWelcomeEmail = (email, fname) => {
  const mailOptions = {
    from: process.env.USER,
    to: email,
    subject: "Welcome to Pola technologies",
    html: `<h1>Welcome to pola technologies </h1>
            <h2>Hello ${fname}</h2>
            <p>Thanks for creating an account on pola technologies.We're excited to have you on board</p>
            </div>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending welcome email:", error);
    } else {
      console.log("Welcome email sent:", info.response);
    }
  });
};

module.exports = { sendWelcomeEmail };
