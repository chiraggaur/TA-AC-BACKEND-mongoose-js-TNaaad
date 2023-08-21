let express = require("express");
let mongoose = require("mongoose");
let Users = require("./models/users");
let Articles = require("./models/articles");
let Comments = require("./models/comments");

// connect mongoose to db

mongoose.connect("mongodb://127.0.0.1:27017/vlog");

// initiate express server

let app = express();

//middleware

app.use(express.json());

// routes

app.post(`/articles`, (req, res) => {
  //   const userId = req.params.userId;
  const data = req.body;
  Articles.create(data);
  console.log(data);
});

//errors

app.listen(5000, () => {
  console.log("server is live");
});
