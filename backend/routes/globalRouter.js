import express from "express";
const globalRouter = express.Router();

import multer from "multer";

multer.diskStorage({
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  }
});
const uploader = multer({
  dest: "../backend/public/cardImages/"
});
import {
  addTeamCard,
  getTeamCards,
  checkPassword,
  updateTeamCard
} from "../controllers/globalController";

globalRouter.post("/addTeamCard", uploader.any(), addTeamCard);
globalRouter.get("/getTeamCards", getTeamCards);
globalRouter.post("/checkPassword", checkPassword);
globalRouter.post("/updateTeamCard", uploader.any(), updateTeamCard);

export default globalRouter;
