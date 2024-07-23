const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongoURL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('Database connected!');
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
