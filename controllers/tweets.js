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
    console.log(req.body);
    let newPost = [req.body, ...table];
    table = [...newPost];
    res.send(table);
  } catch (error) {
    console.error("Error creating new post:", error);
    res.status(500).send("Internal Server Error");
  }
}
