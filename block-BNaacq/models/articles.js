let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articles = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    tags: { type: Number },
    author: Schema.Types.ObjectId, // doubt
    comments: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Articles", articles);
