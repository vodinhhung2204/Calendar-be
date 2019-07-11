const mongoose = require("mongoose");

/**
 *  @swagger
 *  definitions:
 *  CheckedDay:
 *  type: object
 *  properties:
 *    userID: type: String
 *    habitID: type: String
 *    dayChecked: type: Date
 *    note: type: Date
 *    color: type: String
 *    required:
 *      - idUser
 *      - idHabit
 *      - dayChecked
 *      - note
 *      - color
 */

const { Schema } = mongoose;

const CheckedDaySchema = new Schema({
  habitID: { type: String, required: "HabitID is required !" },
  userID: { type: String, required: "UserID is required !" },
  dayChecked: { type: Date },
  note: { type: String, required: "Note is required !" },
  color: { type: String, required: "Color is required !" },
});

module.exports = mongoose.model("CheckedDay", CheckedDaySchema);
