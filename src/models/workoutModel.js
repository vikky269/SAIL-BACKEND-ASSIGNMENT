import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }, // in minutes
    caloriesBurned: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
})

const workoutModel = mongoose.model("workouts", workoutSchema)

export default workoutModel