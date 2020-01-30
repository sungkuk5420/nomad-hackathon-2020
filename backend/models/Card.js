import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  teamType: String,
  firstPeopleImage: String,
  firstPeopleName: String,
  secondPeopleImage: String,
  secondPeopleName: String,
  comment: String
});
const model = mongoose.model("Card", CardSchema);

export default model;
