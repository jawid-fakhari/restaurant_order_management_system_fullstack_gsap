import mongoose from "mongoose";

//creare un modello del data per il nostro prodotto
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please entere food's name"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
    ingredients: {
      type: String,
      required: [true, "Please enter ingridients"],
    },
  },
  {
    timestamps: true, //ci da due opzione, data del creazione e data del aggiornamento
  }
);

//nominare il il nostro ProductSchema che poi andrà nel database
const Product = mongoose.model("Product", ProductSchema);
//esportare il modello
export default Product;

//questo è come si crea un modello, poi useremo questo modello per creare dei prodotti nel nostro databse