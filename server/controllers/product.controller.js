
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params; //metodo req.params di express è un oggetto con tutti properties per evitare usare loop per trovare un property
    const product = await Product.find(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postProducts = async (req, res) => {
  try {
    //creare un modello di product nel nostro database
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putProducts = async (req, res) => {
  try {
    const { id } = req.params;
    //findByIdAndUpdate (mongoose func) trova doc con l'id, e lo aggiorna con i nuovi dati
    const product = await Product.findByIdAndUpdate(id, req.body); //rea.body object permette di accedere al data di un json obj da parte cliente

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    //check updated product
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const delProducts = async (req, res) => {
  try {
    const { id } = req.params;
    //findByIdAndDelete (mongoose func) trova doc con l'id, e lo cancella
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

