const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongoURL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,           // Use the new MongoDB connection string parser
      useUnifiedTopology: true,        // Use the new MongoDB engine topology
      maxPoolSize: 10,                 // Replaces 'poolSize'
      serverSelectionTimeoutMS: 5000,  // Server selection timeout of 5 seconds
      socketTimeoutMS: 45000,          // 45 seconds socket timeout
      keepAlive: true,                 // Keep connections alive
      keepAliveInitialDelay: 300000,   // Initial delay for keep-alive (5 minutes)
    });

    console.log('Database connected!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit process with failure
  }

  // Handling disconnection
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected!');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
};

module.exports = connectDB;