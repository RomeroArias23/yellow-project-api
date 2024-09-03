const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongoURL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,           
      useUnifiedTopology: true,        
      poolSize: 10,                    
      connectTimeoutMS: 30000,        
      socketTimeoutMS: 45000,          
      keepAlive: true,                
      keepAliveInitialDelay: 300000,   
      serverSelectionTimeoutMS: 5000,  
      autoReconnect: true,             
      reconnectTries: Number.MAX_VALUE, 
      reconnectInterval: 5000          
    });

    console.log('Database connected!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); 
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
