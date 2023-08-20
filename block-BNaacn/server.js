let express = require("express");
let mongoose = require("mongoose");

//

mongoose.connect("mongodb://127.0.0.1:27017/myapp");

let app = express();

app.listen(3000, () => {
  console.log("server is live ");
});
