import mongoose from "mongoose";

const CheckoutSchema = mongoose.Schema(
  {
    tableNumber: {
      type: Number,
      required: true,
    },
    orders: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true, //ci da due opzione, data del creazione e data del aggiornamento
  }
);

const Checkout = mongoose.model("Checkout", CheckoutSchema);

export default Checkout;
