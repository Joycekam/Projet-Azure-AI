const express = require('express');
const path = require('path');
const router = express.Router();
const faceDetectionController = require('../controllers/faceDetectionController');

// Route pour la page d'accueil
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index'));
});

// Route pour la page de l'application
router.get('/application', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/application'));
});

// Route pour la page "À propos"
router.get('/apropos', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/apropos'));
});

// Route pour la détection faciale
router.post('/detect-faces', faceDetectionController.detectFaces);

module.exports = router;