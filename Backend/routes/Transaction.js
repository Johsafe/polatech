const express = require("express");
const { generateOauthToken } = require("../middleware/generateToken");
const { initiatePayment } = require("../services/SafaricomTransaction");
const stkRouter = express.Router();

//send a stk push
stkRouter.post('/',generateOauthToken, async (req, res) => {
  try {
    const phoneNumber = req.body.phone.substring(1);
    const amount = req.body.amount;
    // const callbackUrl = process.env.CALLBACK_URL;
    const callbackUrl = "https://every-lions-spend.loca.lt/callback"

    // Validate amount and phoneNumber as needed

    const paymentResult = await initiatePayment(amount, phoneNumber,callbackUrl);

    res.json({
      message: 'Payment initiated successfully',
      paymentResult,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error initiating payment',
      error: error.message,
    });
  }
});

// response from safaricom
stkRouter.post("/callback", (req, res) => {
  try {
    // Handle the callback data received from Safaricom
    const callbackData = req.body;
    console.log('Safaricom payment callback data:', callbackData.Body);
    if(!callbackData.Body.stkCallback.CallbackMetadata){
      console.log(callbackData.Body);
      return res.json("ok");
    }
    console.log(callbackData.Body.stkCallback.CallbackMetadata);
    // Implement your business logic for processing the callback data
    // For example, update the order status in your database, send a notification, etc.

    res.json({ message: 'Callback received successfully' });
  } catch (error) {
    console.error('Safaricom callback error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = stkRouter;
