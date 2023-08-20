let moongose = require("moongose");
let Schema = moongose.Schema;

let userSchema = new Schema({
  name: String,
  age: Number,
});
