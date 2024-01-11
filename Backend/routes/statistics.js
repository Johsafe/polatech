const express = require("express");
const { Products, Order, OrderItems } = require("../models");
const statisticsRouter = express.Router();

// GET STATS
// PRODUCT STATICTICS
// Get Products that are out of stock
statisticsRouter.get("/out-of-stock", async (req, res) => {
  try {
    const outOfStockProducts = await Products.findAll({
      where: {
        inStock: 0,
      },
    });

    if (outOfStockProducts === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.json(outOfStockProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching out-of-stock products",
      error: error.message,
    });
  }
});

//out of stock count
statisticsRouter.get("/out-of-stock-count", async (req, res) => {
  try {
    const outOfStockProductCount = await Products.count({
      where: {
        inStock: 0,
      },
    });

    res.json(outOfStockProductCount || 0);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching out-of-stock product count",
      error: error.message,
    });
  }
});

//product count
statisticsRouter.get("/total-product-count", async (req, res) => {
  try {
    const totalProductCount = await Products.count();
    res.json(totalProductCount || 0);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching total product count",
      error: error.message,
    });
  }
});

// GET ORDER STATICS
//Get total orders
statisticsRouter.get("/total-orders", async (req, res) => {
  try {
    const totalOrders = await Order.count();

    res.json(totalOrders || 0);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching total orders", error: error.message });
  }
});
//Get Total Product sold
statisticsRouter.get("/total-sold", async (req, res) => {
  try {
    const totalSold = await OrderItems.sum("quantity");

    res.json(totalSold || 0);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching total sold", error: error.message });
  }
});

//amout gained from selling the poducts
statisticsRouter.get("/total-amount-sold", async (req, res) => {
    try {
      const totalAmountSold = await Order.sum('totalAmount');
  
      res.json(totalAmountSold || 0);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching total amount sold", error: error.message });
    }
  });

module.exports = statisticsRouter;
