const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
  addressee: {
    type: String,
    required: true,
    match: /^[A-Z][a-z]*$/,  
    trim: true  
  },
  letter: {
    type: String,
    required: true,
    maxlength: 300  
  },
  date: {
    type: String,
    default: () => {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, '0');  
      const month = (now.getMonth() + 1).toString().padStart(2, '0');  
      const year = now.getFullYear();
      return `${day}-${month}-${year}`; 
    }
  }
});

const Letter = mongoose.model('Letter', letterSchema);

module.exports = Letter;

