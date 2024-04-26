require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.SERVER_MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Succes, connected to mongodb");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
module.exports = connectDB;
