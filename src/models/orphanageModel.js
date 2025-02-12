import mongoose from "mongoose";

const orphanageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    totalSpent: {
        type: Number,
        default: 0
    },
    donations: [
        {
            item: String,
            amount: Number,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true,
})

const orphanageModel = mongoose.model("orphanages", orphanageSchema)

export default orphanageModel