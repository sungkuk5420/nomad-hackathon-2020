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
import { addTeamCard, getTeamCards } from "../controllers/globalController";

globalRouter.post("/addTeamCard", uploader.any(), addTeamCard);
globalRouter.get("/getTeamCards", getTeamCards);

export default globalRouter;
