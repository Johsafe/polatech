const nodemailer = require("nodemailer");
// const order = require("../models/order");

// module.exports.sendWelcomeEmail =async(email, fname) => {
//   try {

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
//send a welcome 
const sendWelcomeEmail = async(email, fname) => {
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
  // await transporter.sendMail(mailOptions);
  //     console.log('Welcome email sent successfully');
    // } catch (error) {
    //   console.error('Error sending order confirmation email:', error.message);
    // }
  };

  module.exports = {sendWelcomeEmail}

//send OrderConfirmationEmail.
// module.exports.sendOrderConfirmationEmail = async(orderId) => {
//   try {
//     // Retrieve order details from the database
//     const order = await order.findByPk(orderId);

//     if (!order) {
//       console.error(`Order with ID ${orderId} not found`);
//       return;
//     }

//     // Construct the email message
//     const mailOptions = {
//       from: process.env.USER, // Sender email address
//       to: order.user.email, // Customer email address (replace with the actual customer email)
//       subject: 'Order Confirmation',
//       text: `Thank you for your order!\nOrder ID: ${orderId}\nAmount: ${order.amount}\nStatus: ${order.status}`,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);
//     console.log('Order confirmation email sent successfully');
//   } catch (error) {
//     console.error('Error sending order confirmation email:', error.message);
//   }
// };
