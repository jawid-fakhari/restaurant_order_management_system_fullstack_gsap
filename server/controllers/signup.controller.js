import SignupModel from "../../server/models/signup.model.js";

export const postSignupData = async (req, res) => {
    try {
        //creare un modello di signup nel database
        const signup = await SignupModel.create(req.body);
        res.status(200).json(signup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};