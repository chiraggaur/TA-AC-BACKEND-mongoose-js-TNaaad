let express = require("express");
let mongoose = require("mongoose");

// before connecting toexpress first connect mongoose to mongodb database mongosh in our case;

mongoose.connect("mongodb://127.0.0.1:27017/myapp");

//initiate the app
let app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(4000, () => {
  console.log("server is live ");
});
