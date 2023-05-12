const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const ordersRoutes = require("./routes/orders");

const databaseUrl = "mongodb://localhost:27017/mern-shop";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app routes
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

// connect to mongo and start server
mongoose.connect(databaseUrl, () => {
  console.log("Connected to DB!");

  app.listen(5000, () => console.log("Server running on http://localost:5000"));
});
