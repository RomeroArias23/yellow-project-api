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

  if(!addressee) {
    return res.status(400).json({ message: 'Addressee is required to perform a search'});
  }

  Letter.find ({ addressee: addressee })
  .then(letters => {
    if(letters.length > 0) {
      res.json(letters);
    } else {
      res.status (404).json({ message: 'No letters found for the specified addresse.' });
    }
  })
  .catch(err => res.status(500).json ({ message: 'Error searching for letters', error: err }));
});

// POST a new letter
router.post('/', (req, res) => {
  const { addressee, letter } = req.body;

  if (!addressee || !letter) {
    return res.status(400).json({ message: "Both addressee and letter are required." });
  }

  const newLetter = new Letter({
    addressee: addressee,
    letter: letter,
    // 'date' field is set to default in the model, so no need to set it here
  });

  newLetter.save()
    .then(() => res.status(201).json(newLetter))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
