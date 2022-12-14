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
      //_id: "1", // id is going to be assigned automaticly by mongdb
      name: "Christmas tree",
      slug: "christmas-tree",
      category: "Tree",
      price: 500,
      countInStock: 10,
      brand: "Brand",
      rating: 4.5,
      numReviews: 10,
      description:
        "12' Deluxe Frasier Christmas tree approximately 84 inches in diameter.",
      image: "/images/p1.jpg",
    },
    {
      // _id: "2",
      name: "Christmas tree big",
      slug: "christmas-tree-big",
      category: "Tree",
      price: 650,
      countInStock: 5,
      brand: "Tonacar",
      rating: 5,
      numReviews: 35,
      description:
        "12' Deluxe Frasier Christmas tree approximately 92 inches in diameter.",
      image: "/images/p2.jpg",
    },
    {
      //_id: "3",
      name: "Christmas tree small",
      slug: "christmas-tree-small",
      category: "Tree",
      price: 320,
      countInStock: 15,
      brand: "Tonacar",
      rating: 3,
      numReviews: 15,
      description: "Christmas tree 50 inches in diameter",
      image: "/images/p3.jpg",
    },
    {
      //_id: "4",
      name: "Light christmas home",
      slug: "light-christmas-home",
      category: "Light",
      price: 50,
      countInStock: 5,
      brand: "Luysik",
      rating: 4.5,
      numReviews: 10,
      description: "Christmas light ",
      image: "/images/nightlight.jpg",
    },
    {
      name: "Christmas small lights",
      slug: "christmas-small-lights",
      category: "Light",
      price: 50,
      countInStock: 7,
      brand: "Luysik",
      rating: 3,
      numReviews: 7,
      description: "Little wooden lights ",
      image: "/images/p3.jpg",
    },
  ],
};
export default data;
