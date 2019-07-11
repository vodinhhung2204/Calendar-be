const CheckedDay = require("./../models/CheckedDay");

async function showCheckedOnDayByUserID(userID, dayToShow) {
  const show = await CheckedDay.find({ userID, dayChecked: dayToShow });
  return show || null;
}

async function getAll() {
  const checkedDay = await CheckedDay.find();
  return checkedDay || null;
}

async function getCheckedDaysByUserID(userID) {
  const checkedDay = await CheckedDay.find({ userID });
  return checkedDay || null;
}

async function getItemByDayChecked(dayChecked, userID, habitID) {
  const checked = await CheckedDay.find({ dayChecked, userID, habitID });
  return checked || null;
}

async function getCheckedDaysByUserIDAndHabitID(userID, habitID) {
  const checked = await CheckedDay.find({ userID, habitID });
  return checked || null;
}

module.exports = {
  getAll,
  getCheckedDaysByUserID,
  getItemByDayChecked,
  getCheckedDaysByUserIDAndHabitID,
  showCheckedOnDayByUserID,
};
