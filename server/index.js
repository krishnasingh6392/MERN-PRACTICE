const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./model/user");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/postdata")
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log("mongodb connection error:", err);
  });

app.post("/register", async (req, res) => {
  const { name, email, city, phone } = req.body;
  try {
    const newUser = new user({ name, email, city, phone });
    await newUser.save();
    res.status(201).json({ message: "user registerd successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
