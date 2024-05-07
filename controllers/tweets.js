import { data } from "../data/data.js";

let table = [...data.tweets];

export function tweetsController(req, res) {
  try {
    res.send(table);
  } catch (error) {
    console.error("Error sending tweets:", error);
    res.status(500).send("Internal Server Error");
  }
}

// Define a POST endpoint to create a new post
export function postInData(req, res) {
  try {
    const newPost = req.body;
    if (
      !newPost["tweet-content"]["tweet-body"]["tweet-text"] ||
      newPost["tweet-content"]["tweet-body"]["tweet-text"].trim() == ""
    ) {
      res.status(400).send("Tweet text cannot be empty");
    } else if (
      newPost["tweet-content"]["tweet-body"]["tweet-text"].length <= 180
    ) {
      let newTweet = [newPost, ...table];
      table = [...newTweet];
      res.send(table);
    } else {
      res.status(400).send("Tweet text is too long (max 180 characters)");
    }
  } catch (error) {
    console.error("Error creating new post:", error);
    res.status(500).send("Internal Server Error");
  }
}
