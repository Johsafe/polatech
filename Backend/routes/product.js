const express = require("express");
const productRouter = express.Router();
const { Products } = require("../models");
const cloudinary = require("../middleware/cloudinary.js");
const multerUpload = require("../middleware/multer");

//create a new product
productRouter.post("/", multerUpload.single('image'), async (req, res) => {
  try {
    const { title, brand, price, inStock, description } = req.body;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path,{
      folder:"ecommerce"
    });
    console.log(result)

    // Extract the image URL from the Cloudinary response
    // const imageUrl = result.secure_url;
    const imageUrl = result.secure_url;
    const imageId = result.public_id;

    // Create a new product with the image URL
    const newProduct = await Products.create({
      title,
      brand,
      price,
      inStock,
      description,
      image: imageUrl,
      cloudinary_id:imageId
    });

    res.json({
      message: 'Product added successfully',
      newProduct,
      imagefile:req.file
    });
  } catch (err) {
    // console.error(err);
    res.status(500).send({
      message: 'Error adding product',
      error: err.message,
    });
  }
});


//get all products
productRouter.get("/", async (req, res) => {
  try {
    const listOfProducts = await Products.findAll();
    res.json(listOfProducts);
  } catch (error) {
    console.error("Get all products error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      error: error.message,
    });
  }
});

//get a product by id
productRouter.get("/:id", async (req, res) => {
  const product = await Products.findByPk(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

//delete product by id
productRouter.delete("/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    // Check if the product exists
     const product = await Products.findByPk(productId);
     if (!product) {
       return res.status(404).json({ message: 'Product not found' });
     }
     // Extract the public ID from the product's image URL
     const imageId = product.cloudinary_id;
    
 
     // Delete the image from Cloudinary
     const deletionResult = await cloudinary.uploader.destroy(imageId);
 
     // Check if the image was successfully deleted from Cloudinary
     if (deletionResult.result === 'ok') {
       // Delete the product from the database
       await Products.destroy({ where: { id: productId } });
 
       res.json({ message: 'Product and image deleted successfully' });
     } else {
       res.status(500).json({ message: 'Error deleting image from Cloudinary'});
     }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Error deleting product",
      error: error.message,
    });
  }
});

//update product + image
productRouter.put('/:productId', multerUpload.single('image'), async (req, res) => {
  try {
    const productId = req.params.productId;
    const { title, brand, price, inStock, description } = req.body;

    // Find the existing product in the database
    const existingProduct = await Products.findByPk(productId);
    if (!existingProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update product details
    existingProduct.title = title;
    existingProduct.brand = brand;
    existingProduct.price = price;
    existingProduct.inStock = inStock;
    existingProduct.description = description;

    // If a new image is uploaded, update the Cloudinary image
    if (req.file) {
      // Delete the existing image from Cloudinary
      await cloudinary.uploader.destroy(existingProduct.cloudinary_id);

      // Upload the new image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path,{
        folder:"ecommerce"
      });

      // Extract the new image URL from the Cloudinary response
      // existingProduct.image = result.secure_url;
      existingProduct.image = result.secure_url;
      existingProduct.cloudinary_id = result.public_id;

    }

    // Save the updated product to the database
    await existingProduct.save();

    res.json({
      message: 'Product updated successfully',
      updatedProduct: existingProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error updating product',
      error: err.message,
    });
  }
});

module.exports = productRouter;

// create a new product: create(object)
// find a product by id: findByPk(id)
// find a product by brand: findOne({ where: { brand: ... } })
// get all products: findAll()
// find all products by productname: findAll({ where: { productname: ... } })
