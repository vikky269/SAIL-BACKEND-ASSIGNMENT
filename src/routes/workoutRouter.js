import express from  'express'
import { getAllWorkOuts, AddWorkout, getWorkoutbyId, updateWorkout } from '../controllers/workoutController.js'

const workOutRouter = express.Router()

workOutRouter.get("/", getAllWorkOuts) //get all workouts or exercises in the database
workOutRouter.post("/create", AddWorkout) // create a new workout in the database
workOutRouter.get("/:id", getWorkoutbyId) // get a single workout by Id
workOutRouter.patch("/update/:id", updateWorkout) // update a specific workout by id

export default workOutRouter