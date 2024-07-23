const Letter = require('../models/letter');

exports.createLetter = async (req, res) => {
  try {
    const { addressee, letter } = req.body;
    const newLetter = new Letter({ addressee, letter });
    await newLetter.save();
    res.status(201).json(newLetter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
