let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleFirst = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    tags: { type: Number },
    author: Schema.ObjectId, // doubt
    comments: [String],
  },
  { timestamps: true }
);
