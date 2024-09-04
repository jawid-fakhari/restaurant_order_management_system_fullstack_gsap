import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// //importare il modello, si usa in POST request (che si spota in controller)
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //== app.use(express.json()) // con la differenzza che qui posso controllare il limite.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());


/************************************ */
//routes, con questo route puliamo tutte le richieste portando li nel rotues folder e controllers folder
app.use("/api/products", productRoute);

//(che si spota in routes e controller)
//// creare GET request per i piatti già registrati (multiple products)
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // creare GET request per l'id del piatto (single product)
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params; //metodo req.params di express è un oggetto con tutti properties per evitare usare loop per trovare un property
//     const product = await Product.find(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // creare POST request per nuovi piatti
// app.post("/api/products", async (req, res) => {
//   try {
//     //creare un modello di product nel nostro database
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // creare PUT request per aggiornare un piatto
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     //findByIdAndUpdate (mongoose func) trova doc con l'id, e lo aggiorna con i nuovi dati
//     const product = await Product.findByIdAndUpdate(id, req.body); //rea.body object permette di accedere al data di un json obj da parte cliente

//     if (!product) {
//       return res.status(404).json({ message: "Product not found!" });
//     }

//     //check updated product
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // creare DELETE request per rimuovere un piatto
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     //findByIdAndDelete (mongoose func) trova doc con l'id, e lo cancella
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found!" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
/************************************* */
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
