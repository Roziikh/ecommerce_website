import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Poxos",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Petros",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1", // id is going to be assigned automaticly by mongdb
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High quality shirt",
      image: "/images/p1.png",
    },
    {
      _id: "2",
      name: "Adidas Fit shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      price: 100,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "High quality shirt",
      image: "/images/p2.png",
    },
    {
      _id: "3",
      name: "Nike pants",
      slug: "nike-pants",
      category: "Pants",
      price: 150,
      countInStock: 15,
      brand: "Nike",
      rating: 3,
      numReviews: 15,
      description: "High quality product",
      image: "/images/p3.png",
    },
    {
      _id: "4",
      name: "Adidas pants",
      slug: "adidas-pants",
      category: "Pants",
      price: 50,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
      image: "/images/p4.jpg",
    },
  ],
};
export default data;
