import Checkout from "../models/checkout.model.js";

export const getCheckouts = async (req, res) => {
  try {
    const checkout = await Checkout.find({});
    res.status(200).json(checkout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCheckout = async (req, res) => {
  try {
    const { id } = req.params; //metodo req.params di express è un oggetto con tutti properties per evitare usare loop per trovare un property
    const checkout = await Checkout.findById(id);
    res.status(200).json(checkout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postCheckout = async (req, res) => {
  try {
    //creare un modello di product nel nostro database
    const checkout = await Checkout.create(req.body);
    res.status(200).json(checkout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putCheckout = async (req, res) => {
  try {
    const { id } = req.params;
    //findByIdAndUpdate (mongoose func) trova doc con l'id, e lo aggiorna con i nuovi dati
    const checkout = await Checkout.findByIdAndUpdate(id, req.body); //rea.body object permette di accedere al data di un json obj da parte cliente

    if (!checkout) {
      return res.status(404).json({ message: "Data not found!" });
    }

    //check updated checkout
    const updatedCheckout = await Checkout.findById(id);
    res.status(200).json(updatedCheckout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const delCheckout = async (req, res) => {
  try {
    const { id } = req.params;
    //findByIdAndDelete (mongoose func) trova doc con l'id, e lo cancella
    const checkout = await Checkout.findByIdAndDelete(id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found!" });
    }

    res.status(200).json({ message: "Checkout deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
