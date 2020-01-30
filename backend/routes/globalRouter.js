import express from "express";
const globalRouter = express.Router();
/* GET home page. */

import { addTeamCard } from "../controllers/globalController";

globalRouter.post("/addTeamCard", addTeamCard);

export default globalRouter;
