import mongoose from 'mongoose';

//creare un modello del data per il nostro prodotto
const SignupSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, 'Please entere your name'],
        },
        email: {
            type: String,
            required: [true, 'Please entere your email'],
        },
        password: {
            type: String,
            required: [true, 'Please entere your password'],
        },
    },
    {
        timestamps: true, //ci da due opzione, data del creazione e data del aggiornamento
    }
);

const SingupModel = mongoose.model("SignupModel", SignupSchema);
export default SingupModel;