const express = require("express");

const loginRouter = express.Router();
const userController = require("./../controllers/UserController");

/**
* @swagger
* /login:
*   post:
*     tags:
*       - User
*     name: Login
*     summary: Log in a user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/User'
*           type: object
*           properties:
*             username:
*               type: string
*             password:
*               type: string
*               format: password
*         required:
*           - username
*           - password
*     responses:
*       200:
*         description: logged in successfully
*       400:
*          desxription: Username or password is incorrect
*/

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
