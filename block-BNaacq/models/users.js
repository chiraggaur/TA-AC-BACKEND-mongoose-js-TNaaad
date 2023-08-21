let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let user = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /@/ },
    age: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", user);
