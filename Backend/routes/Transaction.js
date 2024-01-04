const express = require("express");
const axios = require("axios");
const { generateToken } = require("../middleware/generateToken");
const stkRouter = express.Router();

//send a stk push
stkRouter.post("/", generateToken, async (req, res) => {
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;

  // generating time stamp
  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);

  const shortcode = process.env.PAYBILL;
  const passkey = process.env.PASS_KEY;

  const password = new Buffer.from(shortcode + passkey + timestamp).toString(
    "base64"
  );
  // res.json(password)

  await axios
    .post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortcode, //for Till use store number
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline", //for-till = CustomerBuyGoodsOnline
        Amount: amount,
        PartyA: `254${phone}`, //owner phone --send of the message
        PartyB: shortcode, //bussiness paybill
        PhoneNumber: `254${phone}`, //receipient
        CallBackURL: "https://chubby-cameras-feel.loca.lt/callback",
        AccountReference: `254${phone}`, //account no./name
        TransactionDesc: "Test", //
      },
      {
        headers: {
          Authorization: `Bearer ${req.accessToken}`,
          //   Authorization: "Bearer OAaElZCDBzeEKoGVr5kPP7vXdGtT",
        },
      }
    )
    .then((data) => {
      console.log(data.data);
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(err.message);
    });
});

// response from safaricom
stkRouter.post("/callback", (req, res) => {
  const callbackData = req.body;
  console.log(callbackData);
});

module.exports = stkRouter;
