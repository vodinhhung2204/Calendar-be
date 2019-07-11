const mongoose = require("mongoose");

/**
 *  @swagger
 *  definitions:
 *  CheckedDay:
 *  type: object
 *  properties:
 *    userID: type: string
 *    habitID: type: string
 *    dayChecked: type: Date
 *    note: type: Date
 *    color: type: string
 *    status: type: Number
 *    required:
 *      - idUser
 *      - idHabit
 *      - dayChecked
 *      - note
 *      - color
 *      - status
 */

const { Schema } = mongoose;

const CheckedDaySchema = new Schema({
  habitID: { type: String, required: "HabitID is required !" },
  userID: { type: String, required: "UserID is required !" },
  dayChecked: { type: Date },
  note: { type: String },
  color: { type: String, required: "Color is required !" },
  status: { type: Number, require: "Status is required !" },
});

module.exports = mongoose.model("CheckedDay", CheckedDaySchema);
