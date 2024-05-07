import { Router } from "express";
import { tweetsController } from "../controllers/tweets.js";
import { postInData } from "../controllers/tweets.js";

const tweetsRoute = Router();
tweetsRoute.get("/", tweetsController);
tweetsRoute.post("/", postInData);

export default tweetsRoute;
