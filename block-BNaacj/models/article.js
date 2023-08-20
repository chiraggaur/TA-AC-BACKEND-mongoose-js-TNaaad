let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String, lowercase: true, trim: true, match: /@/ },
  password: { type: String, minlength: 5, maxlength: 15 },
  createAt: { type: Date, timestamp: true },
});

// note connect this data page with server with mongoose.connect(url);`
