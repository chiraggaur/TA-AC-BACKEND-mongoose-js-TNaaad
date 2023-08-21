let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /@/ },
    sports: [String],
  },
  { timestamps: true }
);

let Users = mongoose.model("users", userSchema);

module.exports = Users;
