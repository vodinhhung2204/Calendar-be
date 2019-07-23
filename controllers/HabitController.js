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

module.exports = {
  getItemByHabitIDAndUserID,
  getAll,
  getItemsByUserID,
};
