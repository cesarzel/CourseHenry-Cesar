const mongoose = require('mongoose')
const { rawListeners } = require('../server')

const movieSchema =  new mongoose.Schema({
    title:{
        type: String,
        required : true,
        unique : true
    },
    year:{
        type: Number,
        required : true
    },
    director: {
        type: String,
        required : true
    },
    duration: {
        type: Number,
        required : true
    },
    genre: {
        type: Array,
        required : true
    },
    rate: {
        type: Number,
        required : true
    },
    poster: {
        type: String,
        required : true
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;