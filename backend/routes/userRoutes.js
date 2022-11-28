import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  //by using expressAsyncHandler function we can catch the error in the async function inside it
  //ete error lini server.js-i err kashxati
  expressAsyncHandler(async (req, res) => {
    console.log(bcrypt.hashSync("123456"));
    console.log(req.body.email);
    console.log(req.body.password);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      //checking password
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid mail or password" });
  })
);

export default userRouter;
