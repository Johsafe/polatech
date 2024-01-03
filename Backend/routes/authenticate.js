const express = require("express");
const authRouter = express.Router();
const { Authenticate } = require("../models");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const sendEmail = require("../middleware/sendEmail");
const { Sequelize } = require("sequelize");

//format phone number
const formatKenyanPhoneNumber = (phoneNumber, res) => {
  // Remove any non-digit
  phoneNumber = phoneNumber.replace(/\D/g, "");

  if (!/^\d{10}$/.test(phoneNumber)) {
    res.status(400).json({
      error: "Invalid mobile number format. Please enter a 10-digit number.",
    });
    return;
  } else {
    // Remove the "0" and replace it with (+254)
    phoneNumber = "254" + phoneNumber.substr(1);
    return phoneNumber;
  }
};

//Create new User

authRouter.post("/create", async (req, res) => {
  try {
    const { fname, sname, email, mobile, password } = req.body;

    //confirm is user exists in the system
    const userExists = await Authenticate.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (userExists)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });
    //Format mobile number to kenyan
    const formattedPhoneNumber = formatKenyanPhoneNumber(mobile, res);

    // If an error occurred in the formatting function, it has already sent the response
    if (!formattedPhoneNumber) {
      return;
    }
    const user = await Authenticate.create({
      fname,
      sname,
      email,
      // mobile,
      mobile: formattedPhoneNumber,
      password: bcrypt.hashSync(password, 10),
    });
    // const newUser = await user.save();
    // `User ${user.fname}`
    sendEmail.sendWelcomeEmail(user.email, user.fname);

    res.status(201).json({
      message: "Signup successful!",
      user: user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Signup failed. Please check your input and try again.",
      error: error.message,
    });
  }
});

//login Route
// authRouter.post("/log", async (req, res) => {
//   const { identifier, password } = req.body;

//   if (!identifier || !password) {
//     return res.status(400).json({
//       error: "Both email/mobileNumber and password are required for login.",
//     });
//   }

//   console.log(identifier);

//   try {
//     let processedIdentifier;

//     // Check if the identifier is an email
//     if (/^\S+@\S+\.\S+$/.test(identifier)) {
//       processedIdentifier = identifier;
//     } else {

//       const formattedPhoneNumber = formatKenyanPhoneNumber(identifier, res);
//       processedIdentifier = formattedPhoneNumber;
//     }
//     console.log("after", processedIdentifier);

//     const user = await Authenticate.findOne({
//       // where: {
//       //   [Sequelize.or]: [
//       //     { mobile: processedIdentifier },
//       //     Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('email')), Sequelize.fn('LOWER', processedIdentifier)),
//       //   ],
//       // },
//       where: {
//         [Sequelize.or]: [
//           { email: processedIdentifier },
//           { mobileNumber: processedIdentifier },
//         ],
//       },
//     });

//     // Check if the user exists
//     if (!user) {
//       return res.status(401).json({
//         error:
//           "Invalid credentials. Please check your email/mobileNumber and password.",
//       });
//     }

//     // Verify the hashed password
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({
//         error:
//           "Invalid credentials. Please check your email/mobileNumber and password.",
//       });
//     }

//     res.json({
//       message: "Login successful!",
//       user,
//     });
//   } catch (error) {
//     res.status(500).send({
//       message: "Signin failed. Please check your input and try again.",
//       error: error.message,
//     });
//   }
// });


// login with email
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Both email and password are required for login.",
    });
  }

  console.log(email);

  try {
    const user = await Authenticate.findOne({
      where: {
         email: email,
      },
    });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({
        error:
          "Invalid credentials. Please check your email.",
      });
    }

    // Verify the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error:
          "Invalid credentials. Please check your password.",
      });
    }

    res.json({
      message: "Login successful!",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Signin failed. Please check your input and try again.",
      error: error.message,
    });
  }
});

// Get all users route
authRouter.get("/users", async (req, res) => {
  try {
    const users = await Authenticate.findAll();

    res.json({
      users,
    });
  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

//delete user by id
authRouter.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Find the user by ID
    const user = await Authenticate.findByPk(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    // Delete the user
    await user.destroy();

    res.json({
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = authRouter;
