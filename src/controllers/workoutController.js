import workoutModel from "../models/workoutModel.js";

const exrecise = workoutModel

//get all workouts or exercises in the database

 export const getAllWorkOuts = async (req, res) => {
    try {
        const exercises = await exrecise.find()
        if(!exercises) return res.status(201).json({message:"No exercise in the database yet"})
            res.status(200).json(exercises)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
 }
 // Add workout to the database

 export const AddWorkout = async (req, res)=> {
    try {
        const newExercise = new exrecise(req.body)
        await newExercise.save()
        res.status(201).json(newExercise)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
 }

 // get a single workout by Id

 export const getWorkoutbyId = async (req, res)=> {
    try {
        const exercise = await exrecise.findById(req.params.id)
        if(!exercise){
            return res.status(404).json({message: "Exercise not found!"})
        }
        res.status(200).json(exercise)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
 }

 // update a specific workout by id

 export const updateWorkout = async (req, res)=> {
    try {
        const updatedWorkout = await exrecise.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!updatedWorkout){
            return res.status(404).json({message: "Exercise not found"})
        }
        res.status(200).json({message: "Exercise updated successfully", updatedWorkout})
    } catch (error) {
        res.status(400).json({error: error.message })
    }
 }