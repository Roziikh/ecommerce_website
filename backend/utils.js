import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      //amboxj user-i info-i poxaren grum enw aysqany` aranc password
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    process.env.JWT_SECRET,
    {
      expiresIn: "90d",
    }
  );
};
