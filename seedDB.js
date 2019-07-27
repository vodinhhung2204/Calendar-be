/* eslint-disable no-undef */

db.users.insert([
  {
    username: "anhduy",
    password: "$2b$10$mo62g38CJ3htQRPUD44S1Ox4NplNGB870t6PPiYoOBDqmbKmYRtl6",
    fullname: "Nguyễn Vũ Anh Duy",
    email: "nguyenvuanhduy1905@gmail.com",
    role: "Staff",
  },
  {
    username: "khanhlinh",
    password: "$2b$10$mo62g38CJ3htQRPUD44S1Ox4NplNGB870t6PPiYoOBDqmbKmYRtl6",
    fullname: "Nguyễn Vũ Khánh Linh",
    email: "nguyenvukhanhlinh0508@gmail.com",
    role: "Student",
  },
]);
db.habits.insert([
  {
    userID: "5d358cce067ab52957664a10",
    name: "Swimming on beach",
    slogan: "Swimng to get health",
    timeBegin: "2019-07-01T17:00:00.000Z",
    timeEnd: "2019-08-01T17:00:00.000Z",
    color: "#4bf542",
    totalFinishDay: 0,
    totalUnfinishedDay: 0,
  },
  {
    userID: "5d358cce067ab52957664a0f",
    name: "Football with team",
    slogan: "Do got get more skill",
    timeBegin: "2019-07-01T17:00:00.000Z",
    timeEnd: "2019-08-01T17:00:00.000Z",
    color: "#4bf542",
    totalFinishDay: 0,
    totalUnfinishedDay: 0,
  },
  {
    userID: "5d358cce067ab52957664a0f",
    name: "Get up and call to family",
    slogan: "call parent and and girlfriend",
    timeBegin: "2019-07-01T17:00:00.000Z",
    timeEnd: "2019-08-01T17:00:00.000Z",
    color: "#f5b342",
    totalFinishDay: 0,
    totalUnfinishedDay: 0,
  },
]);
db.checkeddays.insert([
  {
    habitID: "5d358d213edcd2dc1113b445",
    userID: "5d358cce067ab52957664a10",
    dayChecked: "2019-07-03T17:00:00.000Z",
    note: "Done",
    color: "#4bf542",
    status: 1,
  },
  {
    habitID: "5d358d213edcd2dc1113b444",
    userID: "5d358cce067ab52957664a10",
    dayChecked: "2019-07-03T17:00:00.000Z",
    note: "Done",
    color: "#4bf542",
    status: 1,
  },
  {
    habitID: "5d358d213edcd2dc1113b446",
    userID: "5d358cce067ab52957664a10",
    dayChecked: "2019-07-03T17:00:00.000Z",
    note: "Done",
    color: "#f5b342",
    status: 1,
  },
]);
