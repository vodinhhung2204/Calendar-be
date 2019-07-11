const express = require("express");
const jwt = require("jsonwebtoken");

const CheckedDay = require("./../models/CheckedDay");
const checkedController = require("./../controllers/CheckedDayController");
const habitController = require("./../controllers/HabitController");
const util = require("./../utils/functionUtils");


/**
* @swagger
* /checked:
*   post:
*     tags:
*       - CheckedDay
*     name: Checked Day in Habit
*     summary: Checked Day in Habit
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: query
*         name: habitID, dayChecked, note, color
*         schema:
*           type: String, Date, String, String
*         required:
*           - dayChecked, Node
*     responses:
*       200:
*         description: Checked day is success
*         schema:
*           $ref: '#/checked'
*       400:
*         description: Checked day is fail
*/

const checkedRouter = express.Router();

function addCheckedDay(request, response, next) {
  const payload = jwt.decode(request.headers.authorization.split(" ")[1]);
  const input = {
    habitID: request.body.habitID,
    userID: payload.userID,
    dayChecked: new Date(request.body.dayChecked),
    note: request.body.note,
    color: "fffff",
  };
  const checkedDay = checkedController.getItemByDayChecked(
    input.dayChecked, input.userID, input.habitID,
  );
  const habit = habitController.getItemByHabitIDAndUserID(input.habitID, input.userID);
  checkedDay.then((check) => {
    if (isNaN(check)) {
      return response.status(400).json("Checked Day is exist!");
    }
    return habit.then((h) => {
      if (h._id !== null && util.compareDate(input.dayChecked, h.timeEnd) <= 0) {
        input.color = h.color;
        const result = new CheckedDay(input);
        return result.save(() => checkedController.getCheckedDaysByUserIDAndHabitID(
          input.userID, input.habitID,
        )
          .then(checked => response.status(200).json(checked))
          .catch(err => next(err)));
      }
      return response.status(400).json("Checked Day Fail!");
    })
      .catch(err => next(err));
  })
    .catch(err => next(err));
}

checkedRouter.post("/", addCheckedDay);

module.exports = checkedRouter;
