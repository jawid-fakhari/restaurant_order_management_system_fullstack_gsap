import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
//importare il modello, si usa in POST request
import Product from "./models/product.model.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //== app.use(express.json()) // con la differenzza che qui posso controllare il limite.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// come creare GET request
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// come creare POST request
app.post("/api/products", async (req, res) => {
  try {
    //creare un modello di product nel nostro database
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

const CONNECTION_URL =
  "mongodb+srv://jawidfakhari:bestRestaurantApp@restaurant-app.duaml.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Restaurant-app";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, (err, result) => {
      if (err) console.log(err);
      console.log(`Server is running on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
