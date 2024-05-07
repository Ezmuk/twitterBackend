import { Router } from "express";
import { getUserController, getUserConnect } from "../controllers/user.js";

const userRoute = Router();

userRoute.use("/users/:handle", getUserController);
userRoute.use("/user", getUserConnect);
export default userRoute;
