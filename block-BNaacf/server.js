let express = require("express");
let app = express();
let mongoose = require("mongoose");

// connect database

mongoose.connect("mongodb://127.0.0.1:27017/usersApp");

app.listen(3000, () => {
  console.log("server is live");
});
