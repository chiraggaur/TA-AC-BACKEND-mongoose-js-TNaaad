let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: { tyep: String },
    description: { type: String },
    tags: [String],
    createdAt: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

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

let addressSchema = new Schema(
  {
    village: { tyep: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: { type: Number, default: 0 },
    favourites: [String],
    user: Schema.Types.ObjectId, // id of user from user schema
  },
  { timestamps: true }
);

mongoose.model("Article", articleSchema); // Article is same as collection name in mongodb
mongoose.model("Users", userSchema);
mongoose.model("Address", addressSchema);

(module.exports = articleSchema), Users, Address;