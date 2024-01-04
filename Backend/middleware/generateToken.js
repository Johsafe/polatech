//middleware generateToken

const { default: axios } = require("axios");

//generate oauth Token generation
const generateToken = async (req, res, next) => {
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
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate access token" });
  }
};

module.exports = { generateToken };
