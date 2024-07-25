const express = require('express');
const router = express.Router();
const Letter = require('../models/letter');

// GET all letters
router.get('/', (req, res) => {
  Letter.find()
    .then(letters => res.json(letters))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET letters by addressee
router.get('/search', (req, res) => {
  const { addressee } = req.query;

  if (!addressee) {
    return res.status(400).json({ message: 'Addressee is required to perform a search' });
  }

  Letter.find({ addressee: new RegExp(addressee, 'i') })
    .then(letters => {
      if (letters.length > 0) {
        res.json(letters);
      } else {
        res.status(404).json({ message: 'No letters found for the specified addressee.' });
      }
    })
    .catch(err => res.status(500).json({ message: 'Error searching for letters', error: err }));
});


// POST a new letter
router.post('/', (req, res) => {
  const { addressee, letter } = req.body;

  if (!addressee || !letter) {
    return res.status(400).json({ message: "Both addressee and letter are required." });
  }

  // Create a new Letter instance
  const newLetter = new Letter({
    addressee,
    letter
  });

  newLetter.save()
    .then(savedLetter => res.status(201).json(savedLetter)) // Send JSON response
    .catch(err => {
      console.error('Error saving letter:', err);
      res.status(500).json({ error: 'An error occurred while saving the letter.' }); // Ensure errors are JSON
    });
});


module.exports = router;
