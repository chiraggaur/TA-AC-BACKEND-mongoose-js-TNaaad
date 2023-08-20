let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// let userSchema = new Schema({
//     name : String,
//     email : String,
//     age : Number
// })

let userSchema = new Schema(
  {
    name: { type: String, uppercase: true }, // can add addition property when datatype passed as object
    email: { type: String },
    age: { type: Number, default: 0 },
  },
  { timestamps: true }
);
