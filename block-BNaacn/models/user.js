let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { tyep: String, required: true },
    email: { type: String, match: /@/, lowercase: true },
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
    createdAt: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

mongoose.model("Users", userSchema);

module.exports = Users;
