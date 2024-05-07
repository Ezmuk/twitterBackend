import { data } from "../data/data.js";

export default function userController(req, res) {
  res.send("Trouver le profil d'utilisateur");
}
export function getUserController(req, res) {
  try {
    let userTweets = data.tweets.filter(
      (tweet) =>
        tweet["tweet-content"]["tweet-body"]["tweet-title"]["tweet-author"] ==
        req.params.handle
    );
    res.send(userTweets);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching user tweets");
  }
}
export function getUserConnect(req, res) {
  try {
    res.send(data.currentUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching current user");
  }
}
