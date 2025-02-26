const express = require('express');

const {moviesController, postmoviesController} = require('../controllers/moviesController')

const router= express.Router()

router.get('/movies', moviesController)
router.post('/movies', postmoviesController)
router.post('/movies/:numero', postmoviesController)

module.exports= router;



