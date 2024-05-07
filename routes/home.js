import { Router } from "express";
import homeController from "../controllers/home.js";

const homeRoute = Router();

homeRoute.get("/", homeController);

export default homeRoute;
