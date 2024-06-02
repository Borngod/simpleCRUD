const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productsRoute = require("./router/products.route.js");
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//end of middleware

app.get("/", (req, res) => {
  res.send("Yeah is working");
});

//routes
app.use("/api/products", productsRoute);

const username = encodeURIComponent("bernard");
const password = encodeURIComponent("Ben@mongo"); // Example with special character
const cluster = "learnbe.paihmmo.mongodb.net";
const dbName = "learnBE";

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&appName=LearnBE`;

mongoose
  .connect(uri)
  .then(() => {
    app.listen(3000, () => {
      console.log("this is first backend project");
    });
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("database failed to connect", error);
  });
