//middleware generateToken

const { default: axios } = require("axios");
const jwt = require("jsonwebtoken");

//generate oauth safaricom Token generation
module.exports.generateOauthToken = async (req, res, next) => {
  const secret = process.env.CONSUMER_SECRET;
  const consumer = process.env.CONSUMER_KEY;
  const auth = Buffer.from(consumer + ":" + secret).toString("base64");
  const url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    req.accessToken = response.data.access_token; // Attach the token to the request
    token = req.accessToken;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate oauth token" });
  }
};

//generate jwtToken
module.exports.generateJwtToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      fname: user.fname,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
