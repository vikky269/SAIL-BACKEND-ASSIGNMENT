import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    showTimes: {
        type: Number,
        required: true
    },
    totalVisitors: {
        type: Number,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
})

const cinemaModel = mongoose.model("cinema", cinemaSchema)

export default cinemaModel