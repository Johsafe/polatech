const express = require("express");
const productRouter = express.Router();
const { Products } = require("../models");
const multerUpload = require("../middleware/multer");
// const cloudinary = require("../middleware/cloudinary.js");

//get the number of all products
productRouter.get("/count", async (req, res) => {
  const count = await Products.countDocuments({});
  if (count) {
    res.json(count);
  } else {
    res.status(404).json({ message: "No products Found" });
  }
});

//get all products
productRouter.get("/", async (req, res) => {
  try {
    const listOfProducts = await Products.findAll();
    res.json(listOfProducts);
  } catch (err) {
    // console.error(":", err);
    res.status(404).send({ message: "Error fetching products", err });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get a product by id
productRouter.get("/:id", async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

//create a new product
productRouter.post("/", multerUpload.single('image'), async (req, res) => {
  try {
    const { title, brand, price, inStock, description } = req.body;
    const result = await multerUpload(req.file.path);
    // res.json(result);

    // Extract the image URL from the Cloudinary response
    const imageUrl = result.public_id;

    const newProduct = await Products.create({
      title,
      brand,
      price,
      inStock,
      description,
      image: imageUrl,
    });
    // const newuser = await user.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).send({
      message: "Error adding product",
      error: err.message,
    });
  }
});

module.exports = productRouter;


// create a new User: create(object)
// find a User by id: findByPk(id)
// find a User by email: findOne({ where: { email: ... } })
// get all Users: findAll()
// find all Users by username: findAll({ where: { username: ... } })
