const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/api/users");
// const boardsRouter = require("./routes/api/boards");
require("dotenv").config();

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

// app.use("/users", usersRouter);
// app.use("/boards", boardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
