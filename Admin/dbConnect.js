const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://harroldvous:8rdLIfvjajyqY0na@cluster0.u4e4aem.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected To Mongodb Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`);
  }
};

module.exports = connectDB;