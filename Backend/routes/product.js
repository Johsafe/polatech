const express = require("express");
const productRouter = express.Router();
const { Products } = require("../models");

productRouter.get("/", async (req, res) => {
  const listOfProducts = await Products.findAll();
  res.json(listOfProducts);
});

productRouter.post("/", async (req, res) => {
  const product = req.body;
  await Products.create(product);
  res.json(product);
});

module.exports = productRouter;
