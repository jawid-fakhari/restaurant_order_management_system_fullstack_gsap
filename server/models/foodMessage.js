import mongoose from "mongoose";

//mongoose model per creare un modello di data per db
const foodSchema = new mongoose.Schema({
  name: String,
  ing: String,
  price: Number,
  // tags: [String],
  // likeCount: {
  // selectedFile: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const FoodInfo = mongoose.model("FoodInfo", foodSchema);

export default FoodInfo;

