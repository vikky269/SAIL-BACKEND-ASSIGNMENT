import BookModel from "../models/libraryModel.js";
const Book = BookModel


// Add a new book
export const addBook = async (req, res) => {
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Fetch all books
  export const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get a single book by ID
  export const getBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: "Book not found" });
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  //updatebookby Id

  export const updateBook = async (req, res)=> {
      try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book) return res.status(404).json({message: "Book not found"});
        res.status(200).json({message: "Book updated successfully", book});
      } catch (error) {
        res.status(500).json({error: error.message});
      }
  }