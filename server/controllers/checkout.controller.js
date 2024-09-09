import Checkout from "../models/checkout.model.js";

export const getCheckouts = async (req, res) => {
  try {
    const checkout = await Checkout.find({});
    res.status(200).json({ checkout });
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

    // Trova il checkout tramite l'id e aggiorna con i nuovi dati
    let checkout = await Checkout.findById(id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found!" });
    }

    // Aggiorna i dati del checkout
    checkout.tableNumber = req.body.tableNumber || checkout.tableNumber;
    checkout.orders = req.body.orders || checkout.orders;

    // Calcola il nuovo totalPrice in base agli ordini aggiornati
    checkout.totalPrice = checkout.orders.reduce((sum, order) => {
      return sum + order.price * order.quantity;
    }, 0);

    // Salva il checkout aggiornato
    const updatedCheckout = await checkout.save();

    res.status(200).json(updatedCheckout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const putCheckout = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const checkout = await Checkout.findByIdAndUpdate(id, req.params);

//     if (!checkout) {
//       return res.status(404).json({ message: "Data not found!" });
//     }

//     //check updated product
//     const updatedCheckout = await Product.findById(id);
//     res.status(200).json(updatedCheckout);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

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
