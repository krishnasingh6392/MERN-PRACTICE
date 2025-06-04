const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const user = require("./model/user");
app.use(cors());
app.use(express.json());
const PORT = 3000;
mongoose
  .connect("mongodb://localhost:27017/getdata")
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log("mongodb connection error:", err);
  });
app.get("/user", async (req, res) => {
  try {
    const response = await user.find();
    res.status(200).json(response);
  } catch (err) {
    console.log("fetching user error:", err);
  }
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
