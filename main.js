import express from "express";
import userRoute from "./routes/user.js";
import tweetsRoute from "./routes/tweets.js";

const app = express();

app.use(express.json());

app.use("/tweets", tweetsRoute);

app.use("/", userRoute);
app.listen(4000);
