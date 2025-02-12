import mongoose from 'mongoose'

const librarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:
    {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    checkedOutQuantity: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
})

const BookModel = mongoose.model("library", librarySchema)

export default BookModel