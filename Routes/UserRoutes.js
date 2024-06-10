const express = require("express");
const app = express.Router();
const User = require("../Models/User");
app.post("/login", async (req, res) => {
  try {
    const result = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(result);
    if (result != null) {
      res.json(result);
    }
    res.status(400).json({ msg: "Error" });
  } catch {
    res.status(404).json({ error: "error" });
  }
});
app.post("/register", async (req, res) => {
  try {
    const newuser = await User(req.body);
    await newuser.save();
    res.send("registered succesfully");
  } catch {
    res.status(404).json({ error: "error" });
  }
});
app.post("/update", async (req, res) => {
  try {
    console.log(req.body);
    await User.findByIdAndUpdate({ _id: req.body._id }, req.body);
    const user = await User.findById({ _id: req.body._id });
    console.log(user.data);
    res.send(user.data);
  } catch {
    res.status(400).json({ error: "error occured" });
  }
});
module.exports = app;
