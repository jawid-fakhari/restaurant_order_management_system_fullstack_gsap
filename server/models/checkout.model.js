import mongoose from "mongoose";

const CheckoutSchema = mongoose.Schema({
  orderDetails: {
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
});

const Checkout = mongoose.model("Checkout", CheckoutSchema);

export default Checkout;