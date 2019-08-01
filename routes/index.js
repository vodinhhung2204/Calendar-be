const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const habitController = require("../controllers/HabitController");
const checkedController = require("../controllers/CheckedDayController");

router.route("/")
  .get((req, res) => {
    const userIDLogin = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    return habitController.getItemsByUserID(userIDLogin)
      .then(result => res.status(200).json(result))
      .catch(err => res.status(400).json({ message: err.message }));
  });
router.route("/habit")
  .get(async (req, res) => {
    const userIDLogin = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const habitID = req.query.id;
    try {
      const habit = await habitController.getListHabitByHabitIDAndUserID(habitID, userIDLogin);
      const check = await checkedController.getCheckedDaysByUserIDAndHabitID(userIDLogin, habitID);
      return res.status(200).json({ habit: [habit], listChecked: check });
    } catch (error) {
      return res.status(400).json({ code: 400, message: error.message });
    }
  });

module.exports = router;
