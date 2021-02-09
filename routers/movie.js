const express = require('express');
const movieController = require('../controllers/movie');

const router = express.Router();

router.get('/', movieController.getHome);

router.get('/api/movies', movieController.getMovies);

router.post('/movies', movieController.postMovie);

router.get('/api/movies/:id', movieController.getMovie);

router.post('/movies/rate/:id', movieController.postRate);

module.exports = router;