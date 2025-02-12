import express from 'express'
import { addCinema, getAllCinemas, updateCinema, getCinemabyId } from '../controllers/cinemaController.js'

const cinemaRouter = express.Router()

cinemaRouter.get("/", getAllCinemas ) //get all movies
cinemaRouter.post("/create-cinema", addCinema) //add a new movie to the database
cinemaRouter.get("/:id", getCinemabyId) //get a specific movie by id
cinemaRouter.patch("/update/:id", updateCinema ) //update a specific movie by id

export default cinemaRouter