const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();

const { connectdb } = require("./DB/connect");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["get", "post", "put", "delete"],
    allowedHeaders: ["content-type"],
  })
);

// app.use(
//   cors({
//     origin: "http://localhost:5173", // or '*' for all origins
//   })
// );

const PORT = process.env.PORT || 4000;
const DB = process.env.MONGO_URL;
// console.log(DB);

const bookRouter = require("./routes/bookRoutes");

app.use("/api/v1/books", bookRouter);

const start = async () => {
  try {
    await connectdb(DB);
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...!!`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1); // Exit the process with a failure code
  }
};

start();
