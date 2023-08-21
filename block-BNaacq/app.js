let express = require("express");
let mongoose = require("mongoose");

// connect mongoose to db

mongoose.connect("mongodb://127.0.0.1:27017/blog");

// initiate express server

let app = express();

//middleware

// routes

//errors

app.listen(5000, () => {
  console.log("server is live");
});
