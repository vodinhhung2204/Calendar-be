const Habit = require("./../models/Habit");

async function getAll() {
  const habits = await Habit.find();
  return habits || null;
}

async function getItemsByUserID(userID) {
  const habits = await Habit.find({ userID });
  return habits || null;
}

async function getItemByHabitIDAndUserID(habitID, userID) {
  const habit = await Habit.findById({ _id: habitID });
  if (habit.userID === userID) {
    return habit;
  }
  return null;
}

async function getListHabitByHabitIDAndUserID(listHabitID, userID) {
  if (typeof (listHabitID) === "string") return getItemByHabitIDAndUserID(listHabitID, userID);
  const list = await Habit.find({ _id: { $in: listHabitID }, userID });
  return list || null;
}

module.exports = {
  getAll,
  getItemsByUserID,
  getItemByHabitIDAndUserID,
  getListHabitByHabitIDAndUserID,
};
