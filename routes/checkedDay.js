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
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/CheckedDay'
*           type: object
*           properties:
*             dayChecked:
*               type: Date
*             habitID:
*               type: string
*             note:
*               type: string
*             status:
*               type: string
*         required:
*           - dayChecked, habitID, note, status
*     responses:
*       200:
*         description: Checked day is success
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
    status: request.body.status,
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
        if (input.status === 1) {
          h.totalFinishDay += 1;
        } else h.totalUnfinishedDay += 1;
        h.save();
        input.color = h.color;
        if (input.status === 1) {
          h.totalFinishDay += 1;
        } else h.totalUnfinishedDay += 1;
        h.save();
        const result = new CheckedDay(input);
        return result.save(() => {
          checkedController.getCheckedDaysByUserIDAndHabitID(
            input.userID, input.habitID,
          )
            .then(checked => response.status(200).json(checked))
            .catch(err => next(err));
        });
      }
      return response.status(400).json("Checked Day Fail!");
    })
      .catch(err => next(err));
  })
    .catch(err => next(err));
}

checkedRouter.post("/", addCheckedDay);

module.exports = checkedRouter;
