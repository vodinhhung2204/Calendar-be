const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const habitController = require("../controllers/HabitController");

router.route("/")
  .get((req, res) => {
    const userIDLogin = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    return habitController.getItemsByUserID(userIDLogin)
      .then(result => res.status(200).json(result))
      .catch(err => res.status(400).json({ message: err.message }));
  });
router.route("/habit")
  .get((req, res) => {
    const userIDLogin = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const habitID = req.query.id;
    return habitController.getListHabitByHabitIDAndUserID(habitID, userIDLogin)
      .then(result => res.status(200).json(result))
      .catch(err => res.status(400).json({ code: 400, message: err.message }));
  });

module.exports = router;
