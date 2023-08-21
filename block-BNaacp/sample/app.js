let express = require("express");
let mongoose = require("mongoose");
let users = require("./models/user.js");

// connect mongoose to db

mongoose.connect("mongodb://127.0.0.1:27017/sample");

let app = express();

// middle wares

app.use(express.json());

// routes

app.post("/users", (req, res) => {
  users.create(req.body);
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  console.log(users.find({ _id: `${id}` }));
});

app.listen(3000, () => {
  console.log("server is live");
});

// Q. query a single document(user) using mongoose

// - on GET request on '/users/:id' route, fetch a user
// - use Model.find({\_id: 'some-id'}) // use \_id of inserted document in database
// - use Model.findOne({\_id: 'some-id'})
// - use Model.findById(id)
