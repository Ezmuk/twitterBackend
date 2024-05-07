import express from "express";
import userRoute from "./routes/user.js";
import tweetsRoute from "./routes/tweets.js";
import dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use("/tweets", tweetsRoute);

app.use("/", userRoute);
app.listen(PORT);
