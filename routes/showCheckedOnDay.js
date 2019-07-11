const express = require("express");
const jwt = require("jsonwebtoken");
const checkedDayController = require("./../controllers/CheckedDayController");

/**
* @swagger
* /show-on-day:
*   post:
*     tags:
*       - CheckedDay
*     name: Show Checked On Day
*     summary: Show Checked On Day
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
*           type: Date
*         required:
*           - dayToShow
*     responses:
*       200:
*         description: Success
*         schema:
*           $ref: '#/definition/CheckedDay'
*       400:
*         description: Nothing to show
*/

const router = express.Router();

function showCheckedOnDay(request, response, next) {
  const payload = jwt.decode(request.headers.authorization.split(" ")[1]);
  const dayToShow = new Date(request.body.dayToShow);
  checkedDayController.showCheckedOnDayByUserID(payload.userID, dayToShow)
    .then((result) => {
      if (result.length > 0) {
        return response.status(200).json(result);
      }
      return response.status(400).json("Nothing to show");
    })
    .catch(err => next(err));
}

router.post("/", showCheckedOnDay);

module.exports = router;
