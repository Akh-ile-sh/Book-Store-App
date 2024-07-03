const Book = require("../models/Book");

const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const book = await Book.create({ title, author, publishedYear });
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.status(501).json(error.message);
  }
};

const getOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);

    res.status(200).json({ book });
  } catch (error) {
    res.status(501).json(error.message);
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;

    const { title, author, publishedYear } = req.body;

    const book = await Book.findByIdAndUpdate(id, req.body);

    res.status(200).json({ book });
  } catch (error) {
    res.status(501).json(error.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await Book.findByIdAndDelete(id);

    res.status(200).json("successfully deleted");
  } catch (error) {
    res.status(501).json(error.message);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
};
