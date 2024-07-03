const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();

const { connectdb } = require("./DB/connect");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["get", "post", "put", "delete"],
    allowedHeaders: ["content-type"],
  })
);

const PORT = process.env.PORT;
const DB = process.env.MONGO_URL;
// console.log(DB);

const bookRouter = require("./routes/bookRoutes");

app.use("/api/v1/books", bookRouter);

const start = async () => {
  await connectdb(DB);
  app.listen(PORT, () => {
    console.log(`server listens to port ${PORT}...!!`);
  });
};

start();
