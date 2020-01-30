import dotenv from "dotenv";
import Card from "../models/Card";

dotenv.config();

export const addTeamCard = async (req, res) => {
  const mainImage = req.files
    .filter(item => item.fieldname == "mainImage")
    .map(file => "/cardImages/" + file.filename)[0];
  const firstPeopleImage = req.files
    .filter(item => item.fieldname == "firstPeopleImage")
    .map(file => "/cardImages/" + file.filename)[0];
  const secondPeopleImage = req.files
    .filter(item => item.fieldname == "secondPeopleImage")
    .map(file => "/cardImages/" + file.filename)[0];
  let {
    body: { addTeamCard }
  } = req;
  addTeamCard = JSON.parse(addTeamCard);
  addTeamCard.mainImage = mainImage ? mainImage : "";
  addTeamCard.firstPeopleImage = firstPeopleImage ? firstPeopleImage : "";
  addTeamCard.secondPeopleImage = secondPeopleImage ? secondPeopleImage : "";
  try {
    const insertTeamCard = await Card.create(addTeamCard);
    res.json(insertTeamCard);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
};

export const getTeamCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
};
