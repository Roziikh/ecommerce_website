import express from "express";
import { isAuth } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })), //useing map function to convert _id to product
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: "New Order Created", order }); // froont-um uneinq order_id
  })
);
export default orderRouter;
