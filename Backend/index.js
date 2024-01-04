const express = require("express")
const app = express();

app.use(express.json());
require("dotenv").config();

const db = require("./models");
// Routers
const productRouter = require("./routes/product.js");
const authRouter = require("./routes/authenticate.js");
const orderRouter = require("./routes/orders.js");
const stkRouter = require("./routes/Transaction.js");

app.use("/product", productRouter);
app.use("/authenicate", authRouter);
app.use("/order",orderRouter);
app.use('/transaction',stkRouter);

db.sequelize.sync().then(() => {
    app.listen(8000,()=>{
        console.log("communication enabled...")
    })
});