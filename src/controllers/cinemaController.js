import cinemaModel from "../models/cinemaModel.js"

const cinema = cinemaModel

//add a new movie
export const addCinema = async (req , res)=> {
    try {
        let newCinema = new cinema(req.body)
        await newCinema.save()
        res.status(201).json(newCinema)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get all movies from the database
export const getAllCinemas = async (req , res)=> {
    try {
        let allCinemas = await cinema.find()
        res.status(201).json(allCinemas)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get a specific movie by id
export const getCinemabyId = async (req , res)=> {
    try {
        let specificCinema = await cinema.findById(req.params.id)
        if (!specificCinema) return res.status(404).json({message: "Cinema not found"})
        res.status(200).json(specificCinema)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// update a specific movie by id
export const updateCinema = async (req , res)=> {
    try {
        let updatedCinema= await cinema.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!updatedCinema) return res.status(404).json({message: "Cinema not found"})
        res.status(200).json({message: "Cinema Updated succesfully", updatedCinema})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}