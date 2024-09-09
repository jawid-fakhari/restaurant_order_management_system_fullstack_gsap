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
    totalPrice: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true, //ci da due opzione, data del creazione e data del aggiornamento
  }
);

//Middleware per calcolare il totale prima del salvataggio
CheckoutSchema.pre('save', function(next){
  // calcola il totale
  this.totalPrice = this.orders.reduce((sum, order) => {
    return sum + order.price * order.quantity;
  }, 0);

  next(); // procede con il salvataggio
})

const Checkout = mongoose.model("Checkout", CheckoutSchema);

export default Checkout;
