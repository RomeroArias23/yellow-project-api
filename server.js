const app = require('./app');
const connectDB = require('./config/db');

connectDB().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
      console.log(`Server started on port ${port}`);
  });
}).catch(error => {
  console.error("Database connection failed", error);
  process.exit(1);  // Optional: Exit the process if DB connection fails
});