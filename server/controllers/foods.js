//Import FoodInfo model dal file specifico nella cartella models
import FoodInfo from "../models/foodMessage.js";
//export function per avere tutte i food dal db
export const getFoods = async (req, res) => {
  try {
    //torvare tutti i food in db
    const foodInfos = await FoodInfo.find();

    console.log(foodInfos);
    //mandare un JSON response con i food recuperato
    res.status(200).json(foodInfos);
  } catch (error) {
    //errer handling
    res.status(404).json({ message: error.message });
  }
};


//per creare un nuovo piatto dentro db
export const createFood = async (req, res) => {
  //prendo i dati dal body della richiesta http
  const food = req.body;

  //creare un nuovo FoodInfo instance con food data
  const newFood = new FoodInfo(food);

  try {
    //salvare il nuovo FoodInfo nel db
    await newFood.save();
    //send a 201 status code con il piatto nuovo
    res.status(201).json(newFood);
  } catch (error) {
    //error handling in caso di conflitto
    res.status(409).json({ message: error.message });
  }
};
