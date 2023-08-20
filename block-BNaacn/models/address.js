let mongoose = require("mongoose");

let Schema = mongoose.Schema;

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

mongoose.model("Address", addressSchema);

module.exports = Address;
