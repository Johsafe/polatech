const express = require("express")
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();

const db = require("./models");
// Routers
const productRouter = require("./routes/product.js");
const authRouter = require("./routes/authenticate.js");
const orderRouter = require("./routes/orders.js");
const stkRouter = require("./routes/Transaction.js");
const adminRouter = require("./routes/Admin.js");
const statisticsRouter = require("./routes/statistics.js");

app.use("/product", productRouter);
app.use("/authenicate", authRouter);
app.use("/owner",adminRouter);
app.use("/order",orderRouter);
app.use('/transaction',stkRouter);
app.use('/stats',statisticsRouter)

db.sequelize.sync().then(() => {
    app.listen(8000,()=>{
        console.log("communication enabled...")
    })
});