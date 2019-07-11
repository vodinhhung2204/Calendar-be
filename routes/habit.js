const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const Habit = require("../models/Habit");

/**
* @swagger
* /habit/create:
*   post:
*     tags:
*       - Habit
*     name: Create New Habit
*     summary: Create New Habit
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
*           $ref: '#/definitions/Habit'
*           type: object
*           properties:
*             name:
*               type: string
*             slogan:
*               type: string
*             timeStart:
*               type: Date
*             timeEnd:
*               type: Date
*             color:
*               type: string
*         required:
*           - name, slogan, timeStart, timeEnd, color
*     responses:
*       201:
*         description: Create new habit successed !
*       400:
*         description: Error
*/

const validateTime = (habit) => {
  if (!habit.timeEnd && !habit.after) {
    return {
      status: 400,
      message: "Required either timeEnd or After on",
    };
  }
  if (habit.timeEnd && habit.after) {
    return {
      status: 400,
      message: "Don't Input both timeEnd and After on",
    };
  }
  return true;
};

router.route("/create")
  .post((req, res) => {
    const habit = new Habit(req.body);
    const validate = validateTime(habit);
    if (validate !== true) {
      return res.status(validate.status).json({ message: validate.message });
    }
    if (habit.after) {
      habit.timeEnd = new Date(habit.timeBegin);
      habit.timeEnd.setDate(habit.timeBegin.getDate() + habit.after);
    }
    const decode = jwt.decode(req.headers.authorization.split(" ")[1]);
    habit.idUser = decode.payload;
    habit.totalFinishDay = 0;
    habit.totalUnfinishedDay = 0;
    return habit.save()
      .then(result => res.status(201).json({ data: result, message: "Create new habit successed !" }))
      .catch(err => res.status(400).json(err.errors));
  });

module.exports = router;
