const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
    max: [2024, "cannot be more than 2024"],
    min: [1800, "can't be less than 1800"],
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
