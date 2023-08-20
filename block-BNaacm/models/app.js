let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  title: { type: String },
  discription: { type: String },
});

let Article = userSchema.model("Article", userSchema); // later on we can use methods lets Article.find();

module.exports = Article;
