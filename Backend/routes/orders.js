// routes/order.js

const express = require("express");
const { Op } = require("sequelize");
const orderRouter = express.Router();
const { Order, OrderItems, Products, Authenticate } = require("../models");

//Create order
orderRouter.post("/order", async (req, res) => {
  try {
    const { userId, products } = req.body;

    // Check if the user exists
    const userExists = await Authenticate.findByPk(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new order
    const newOrder = await Order.create({ userId });

    // Calculate total amount
    let totalAmount = 0;

    // Fetch product details for each product in the order
    const productsInOrder = await Products.findAll({
      where: {
        id: {
          [Op.in]: products.map((product) => product.productId),
        },
      },
    });

    // Create order items for each product in the order
    const orderItems = await Promise.all(
      productsInOrder.map(async (product, index) => {
        const { productId, quantity } = products[index];

        // Check if the product exists
        if (!product) {
          throw new Error(`Product with ID ${productId} not found`);
        }

        totalAmount += quantity * product.price;

        // Create an order item for the product
        return OrderItems.create({
          orderId: newOrder.id,
          productId,
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

// Update order by ID
orderRouter.put("/orders/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { status } = req.body;

    const existingOrder = await Order.findByPk(orderId, {
      include: [
        {
          model: OrderItems,
        },
      ],
    });

    if (!existingOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    existingOrder.status = status;

    await existingOrder.save();

    res.json({
      message: "Order updated successfully",
      updatedOrder: existingOrder,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating order", error: error.message });
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
orderRouter.get("/orders/:orderId", async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {
      include: [
        {
          model: OrderItems,
          include: [Products],
        },
      ],
    });

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
orderRouter.delete("/orders/:orderId", async (req, res) => {
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
orderRouter.delete("/orders/:orderId", async (req, res) => {
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
