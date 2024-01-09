// services/safaricomTransaction.js
const axios = require("axios");

module.exports.initiatePayment = async (amount, phoneNumber, callbackUrl) => {
  try {
    // generating time stamp
    const date = new Date();
    const timestamp =
      date.getFullYear() +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      ("0" + date.getDate()).slice(-2) +
      ("0" + date.getHours()).slice(-2) +
      ("0" + date.getMinutes()).slice(-2) +
      ("0" + date.getSeconds()).slice(-2);

    //generate password
    const shortcode = process.env.PAYBILL;
    const passkey = process.env.PASS_KEY;
    const password = new Buffer.from(shortcode + passkey + timestamp).toString(
      "base64"
    );
     const acc = process.env.ACCOUNT_REF;
    // Use the obtained token to initiate a payment
    const { data } = await axios.post(
      "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortcode, //for Till use store number
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline", //for-till = CustomerBuyGoodsOnline
        Amount: amount,
        PartyA: `254${phoneNumber}`, //owner phone
        PartyB: shortcode, //bussiness paybill
        PhoneNumber: `254${phoneNumber}`, //receipient
        CallBackURL: callbackUrl,
        AccountReference: `254${acc}`, // Replace with an order reference or ID
        TransactionDesc: "Payment for Order",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error("Error initiating Safaricom payment:", error.message.data);
    console.error("Safaricom API Error:", error.response.data);
    console.error("Safaricom API Status Code:", error.response.status);
    console.error("Safaricom API Headers:", error.response.headers);
  }
};
