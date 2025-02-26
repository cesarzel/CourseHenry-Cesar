const {createMovie, getMovies} = require('../services/moviesServices')

const moviesController = async(req,res)=>{
    
    try{
        const movies = await getMovies()
        res.send(movies)
    }catch(error){
        res.status(400). send("ERROR AL CARGAR LAS PELÍCULAS")
    }
   
}

const postmoviesController = async (req, res) => {

    try{
        const movie = req.body

        const create = await createMovie(movie)
        res.send(create)
        res.status(201).json({
            message: "Película creada exitosamente",
            movie: newMovie
        });
    }catch (error){
        res.send('Error creando peliculas')
    }
   

}

module.exports = {moviesController, postmoviesController};