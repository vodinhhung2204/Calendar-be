const express = require("express");

const loginRouter = express.Router();
const userController = require("./../controllers/UserController");

function login(request, response, next) {
  userController.login(request.body.username, request.body.password)
    .then((user) => {
      if (user) {
        return response.status(200).json(user);
      }
      return response.status(400).json(
        {
          message: "Username or password is incorrect",
        },
      );
    })
    .catch(err => next(err));
}

loginRouter.post("/", login);

module.exports = loginRouter;
