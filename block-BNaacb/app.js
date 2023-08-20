let express = require("express");
let app = express();
let mongoose = require("mongoose");

// moongose connect

mongoose.connect("mongodb://127.0.0.1:27017/myarticle");

app.listen(2000, () => {
  console.log("server is live");
});
