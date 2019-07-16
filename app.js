const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const chalk = require("chalk");

const userController = require("./controllers/UserController");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const config = require("./config/index");


const app = express();

const { port } = config.server;

mongoose.connect(config.db);
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${chalk.red(config.db)}`);
});
mongoose.connection.on("connected", () => {
  console.log(`Server is running on port ${chalk.red(port)}`);
  console.log(`Connected to database: ${chalk.red(config.db)}`);
});

if (config.env === "development") {
  mongoose.set("debug", true);
}


// Load envs from .env file
if (fs.existsSync("./.env")) {
  dotenv.config();
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// use JWT auth to secure the api
app.use(userController.jwtFunc());

// api Register
app.use("/register", registerRouter);

// api Login
app.use("/login", loginRouter);

app.use((err, request, response, next) => {
  if (err.name === "UnauthorizedError") {
    return response.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }
  return next();
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
