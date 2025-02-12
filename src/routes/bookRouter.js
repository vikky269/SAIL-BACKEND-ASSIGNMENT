import express from 'express'
import {addBook, getAllBooks, getBook, updateBook} from '../controllers/bookController.js'

const bookRouter = express.Router()

bookRouter.post("/create", addBook);  // Add a new book
bookRouter.get("/", getAllBooks);  // Fetch all books
bookRouter.get("/:id", getBook);  // Get a single book
bookRouter.patch("/update/:id", updateBook )

export default bookRouter