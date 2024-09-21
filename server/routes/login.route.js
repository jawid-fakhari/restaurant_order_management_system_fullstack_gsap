import express from 'express';
import SingupModel from '../models/signup.model.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body; //prendere email, password dal doc.
        
        SingupModel.findOne({email: email}) //vai a cercare dentro signup model
        .then(user => {
            if(user) {//allora se user esiste controlla password
                if(user.password === password){
                    res.json("Success")
                }else{
                    res.json("Il password non è corretto!")
                }
            }else{
                res.json({message: "Questo email non esiste nel database!"})
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
