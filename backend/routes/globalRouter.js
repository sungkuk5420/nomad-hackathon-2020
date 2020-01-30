import express from "express";
const globalRouter = express.Router();
/* GET home page. */

import { addTeamCard, getTeamCards } from "../controllers/globalController";

globalRouter.post("/addTeamCard", addTeamCard);
globalRouter.get("/getTeamCards", getTeamCards);

export default globalRouter;
