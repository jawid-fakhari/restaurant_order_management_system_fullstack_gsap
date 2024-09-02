import mongoose from "mongoose";

//mongoose model per creare un modello di data per db
const postSChema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMEssage', postSchema);

export default PostMessage;