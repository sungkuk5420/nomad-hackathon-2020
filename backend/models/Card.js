import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const CardSchema = new mongoose.Schema({
  name: Array,
  images: Array,
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});
const model = mongoose.model("ItemList", CardSchema);


export default model;