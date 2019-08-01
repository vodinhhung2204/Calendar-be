const express = require("express");
const jwt = require("jsonwebtoken");

const habitController = require("./../controllers/HabitController");
const userController = require("./../controllers/UserController");

/**
* @swagger
* /profile:
*   post:
*     tags:
*       - User
*       - Habit
*     name: Profile
*     summary: Profile and show list of habits
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/User'
*           type: object
*           properties:
*         required:
*     responses:
*       200:
*         description: successfully
*       400:
*          desxription: Error
*/

const profileRouter = express.Router();

function profile(request, response) {
  console.log("in this functin");
  const payload = jwt.decode(request.headers.authorization.split(" ")[1]);
  userController.getById(payload.userID)
    .then((user) => {
      habitController.getItemsByUserID(payload.userID)
        .then(habits => response.status(200).json({ userInformation: user, listOfHabits: habits }))
        .catch(err => response.status(400).json(err));
    })
    .catch(err => response.status(400).json(err));
}

profileRouter.get("/", profile);

module.exports = profileRouter;
