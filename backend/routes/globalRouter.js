import express from "express";
const globalRouter = express.Router();
/* GET home page. */

import { 
    home,
} from "../controllers/globalController";

globalRouter.get("/", home);

export default globalRouter;
