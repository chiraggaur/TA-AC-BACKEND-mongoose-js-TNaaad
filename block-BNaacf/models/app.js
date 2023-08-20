let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    village: { type: String },
    city: { type: String },
    state: { type: String },
    pin: { type: Number },
    user: mongoose.Schema.Type.ObjectId,
  },
  { timestamps: true }
);

// 1. village -> String
// 2. city -> String
// 3. state -> String
// 4. pin -> number
// 5. user -> ObjectId of User
