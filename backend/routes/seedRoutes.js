import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({}); //{} means we return all record from Product model, then we create new Products
  const createdProducts = await Product.insertMany(data.products); //inster array of products to database
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers }); //send back products to frontend
});

export default seedRouter;
