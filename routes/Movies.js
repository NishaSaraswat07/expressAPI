import express from 'express';
import { home, allMovies,singleMovie,createMovie,updateMovie,deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

router.get("/",home);
router.get("/movies",allMovies);
router.get("/movies/:id",singleMovie);
router.post("/movies",createMovie);
router.put("/movies/:id",updateMovie);
router.delete("/movies/:id",deleteMovie);

export default router