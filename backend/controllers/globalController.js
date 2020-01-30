import dotenv from "dotenv";
import Card from "../models/Card";

dotenv.config();

export const addTeamCard = async (req, res) => {
  const {
    body: { params }
  } = req;
  try {
    const addTeamCard = params.addTeamCard;
    const insertTeamCard = await Card.create({
      teamType: addTeamCard.teamType,
      firstPeopleImage: addTeamCard.firstPeopleImage,
      firstPeopleName: addTeamCard.firstPeopleName,
      secondPeopleImage: addTeamCard.secondPeopleImage,
      secondPeopleName: addTeamCard.secondPeopleName,
      comment: addTeamCard.commentt
    });
    res.json(insertTeamCard);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
};
