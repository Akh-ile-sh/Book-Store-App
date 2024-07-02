const express = require("express");
const app = express();

const PORT = 3000;

const start = async () => {
  app.listen(PORT, () => {
    console.log(`server listens to port ${PORT}`);
  });
};

start();
