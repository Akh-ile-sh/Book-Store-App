const express = require("express");
const {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");
const router = express.Router();

router.post("/createBook", createBook);
router.get("/getAllBooks", getAllBooks);
router.get("/getOneBook/:id", getOneBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;
