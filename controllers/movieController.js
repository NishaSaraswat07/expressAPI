import mockData from '../mockData.js'

let apiData = mockData;

const home = (req, res)=>{
    res.send("Welcome to BONDFILMS")
}
const allMovies = (req, res)=>{
    res.json(apiData);
}
//movie
const singleMovie = (req, res)=>{
    const id = req.params.id;
    const singleMovie = apiData.find((movie) => movie.imdbID === id);
    if(!singleMovie){
        return res
        .status(404)
        .json({message: "No Movie found!"})
    }
    res.json(singleMovie);
}

//create/post movie
let nextId = Math.floor(Math.random()*9000000) + 1000000;

const createMovie = (req, res)=>{
    const movieData = req.body.movie
    const newMovieData = {
        ...movieData,
        imdbId: 'tt'+ nextId
    }
    nextId++;

    console.log(newMovieData)
    apiData.push(newMovieData)
    res.json(newMovieData)
}
//update movie
const updateMovie = (req, res)=>{
    const id = req.params.id;
    const movieData = req.body.movie
    // console.log({id,movieData})
    const index = apiData.findIndex((movie)=>movie.imdbID === id)
    console.log({index});
    if(index === -1){
        return res
        .status(404)
        .json({message: "No Movie found!"})
    }
    const updatedMovie = {...apiData[index], ...movieData}
    apiData[index] = updatedMovie;
    res.json(updatedMovie)
}
//delete movie
const deleteMovie = (req, res)=>{
    const id = req.params.id;
    const singleMovie = apiData.find((movie) => movie.imdbID === id);
    if(!singleMovie){
        return res
        .status(404)
        .json({message: "No Movie found!"})
    }
    const newData = apiData.filter((movie) => movie.imdbID !== id);
    apiData = newData;
    res.send(`Movie deleted!`)
}
export { home, allMovies, singleMovie, createMovie, updateMovie, deleteMovie }