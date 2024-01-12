const express = require("express");
const { Op } = require("sequelize");
const orderRouter = express.Router();
const { Order, OrderItems, Products, Authenticate } = require("../models");
const { isAuth } = require("../middleware/auth");

//generate orderId
const generateOrderCode = () => {
  // Declare a characters variable which stores all characters
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let OrderCode = "";
  for (let i = 0; i < 8; i++) {
    OrderCode += characters[Math.floor(Math.random() * characters.length)];
  }
  // Append the current timestamp to the Order code
  OrderCode += Date.now().toString();
  return OrderCode;
};

//Create order
orderRouter.post("/order", isAuth, async (req, res) => {
  try {
    const { userId, products, shippingAddress } = req.body;

    // Check if the user exists
    const userExists = await Authenticate.findByPk(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new order
    const id = generateOrderCode();
    const newOrder = await Order.create({ id, userId, shippingAddress });

    // Calculate total amount
    let totalAmount = 0;

    // Fetch product details for each product in the order
    const productsInOrder = await Products.findAll({
      where: {
        id: {
          [Op.in]: products.map((product) => product.pdctId),
        },
      },
    });

    // Create order items for each product in the order
    const orderItems = await Promise.all(
      productsInOrder.map(async (product, index) => {
        const { pdctId, quantity } = products[index];

        // Check if the product exists
        if (!product) {
          throw new Error(`Product with ID ${pdctId} not found`);
        }

        // Check if the product has sufficient stock
        if (product.inStock < quantity) {
          throw new Error(`Product with ID ${pdctId} is out of stock`);
        }

        totalAmount += quantity * product.price;

        // Update product stock
        await Products.update(
          { inStock: product.inStock - quantity },
          { where: { id: pdctId } }
        );

        // Create an order item for the product
        return OrderItems.create({
          orderId: newOrder.id,
          pdctId,
          quantity,
          price: product.price,
        });
      })
    );

    // calculated total amount
    newOrder.totalAmount = totalAmount;
    await newOrder.save();

    res.json({
      message: "Order created successfully",
      newOrder,
      orderItems,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating order", error: error.message });
  }
});

// Get all orders
orderRouter.get("/orders", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
});

// Get order by ID
orderRouter.get("/orders/:id", async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId, {
      include: [
        {
          model: OrderItems,
          include: [Products],
        },
      ],
    });
    //   console.log("Fetched Order:", order);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
});

//Find products of a particular order
orderRouter.get("/orders/:orderId/products", async (req, res) => {
  try {
    const orderItems = await OrderItems.findAll({
      where: { orderId: req.params.orderId },
      include: [Products],
    });

    if (!orderItems || orderItems.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for the order" });
    }

    res.json(orderItems.map((item) => item.Product));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching products for the order",
      error: error.message,
    });
  }
});

// Get order by User
orderRouter.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists
    const userExists = await Authenticate.findByPk(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const userOrders = await Order.findAll({
      where: { userId },
      include: [
        {
          model: OrderItems,
          include: [Products],
        },
      ],
    });

    res.json(userOrders);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
});

// Delete order by ID
orderRouter.delete("/orders/:orderId", isAuth, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.destroy();
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
});

// Delete order and OrderItems by ID
orderRouter.delete("/orders/:orderId", isAuth, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {
      include: [OrderItems],
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    // Delete the associated order items first
    await OrderItems.destroy({
      where: {
        orderId: order.id,
      },
    });
    // Then, delete the order itself
    await order.destroy();

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
});

module.exports = orderRouter;
