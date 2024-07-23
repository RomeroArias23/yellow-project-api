const app = require('./app');
const connectDB = require('./config/db');

connectDB().then(() => {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
