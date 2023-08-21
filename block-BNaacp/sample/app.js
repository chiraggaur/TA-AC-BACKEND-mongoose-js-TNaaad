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

app.get("/users/:id", async (req, res) => {
  let id = req.params.id;
  // let data = await users.find({ _id: id });
  let data = await users.findOne({ _id: id });
  console.log(data);

  // console.log(await users.findById(id).exec());
});

app.put("/users/:id", async (req, res) => {
  let id = req.params.id;
  const data = await users.updateOne(
    { name: "asdfgh" },
    { ship: "USS Enterprise" }
  );
  res.send(data);
});

app.listen(3000, () => {
  console.log("server is live");
});

// Q. query a single document(user) using mongoose

// - on GET request on '/users/:id' route, fetch a user
// - use Model.find({\_id: 'some-id'}) // use \_id of inserted document in database
// - use Model.findOne({\_id: 'some-id'})
// - use Model.findById(id)

// Q. Update a user

// - on PUT request on '/users/:id', update a user
// - use Model.update
// - use Model.updateOne
// - use Model.findByIdAndUpdate(id)
