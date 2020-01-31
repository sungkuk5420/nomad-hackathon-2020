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

export const checkPassword = async (req, res) => {
  let {
    body: { params }
  } = req;
  try {
    const addTeamCard = params.addTeamCard;
    const password = addTeamCard.password;
    const _id = addTeamCard._id;
    const updateCard = await Card.find({
      _id,
      password
    });
    if (updateCard.length > 0) {
      res.json(true);
      res.end();
    } else {
      res.json(false);
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.end();
  }
};
export const updateTeamCard = async (req, res) => {
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
    body: { updateTeamCard }
  } = req;
  updateTeamCard = JSON.parse(updateTeamCard);
  updateTeamCard.mainImage = mainImage ? mainImage : updateTeamCard.mainImage;
  updateTeamCard.firstPeopleImage = firstPeopleImage
    ? firstPeopleImage
    : updateTeamCard.firstPeopleImage;
  updateTeamCard.secondPeopleImage = secondPeopleImage
    ? secondPeopleImage
    : updateTeamCard.secondPeopleImage;
  try {
    const findTeamCard = await Card.findOne({
      _id: updateTeamCard._id
    });

    findTeamCard.teamType = updateTeamCard.teamType;
    findTeamCard.mainImage = updateTeamCard.mainImage;
    findTeamCard.firstPeopleImage = updateTeamCard.firstPeopleImage;
    findTeamCard.firstPeopleName = updateTeamCard.firstPeopleName;
    findTeamCard.secondPeopleImage = updateTeamCard.secondPeopleImage;
    findTeamCard.secondPeopleName = updateTeamCard.secondPeopleName;
    findTeamCard.comment = updateTeamCard.comment;
    findTeamCard.save();
    res.json(findTeamCard);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
};
