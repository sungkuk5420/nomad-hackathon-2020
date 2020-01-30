import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  teamType: String,
  mainImage: String,
  firstPeopleImage: String,
  firstPeopleName: String,
  secondPeopleImage: String,
  secondPeopleName: String,
  comment: String,
  password: String
});
const model = mongoose.model("Card", CardSchema);

export default model;
