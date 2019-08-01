/* eslint-disable no-undef */

// db.users.insert([
//   {
//     username: "anhduy",
//     password: "$2b$10$mo62g38CJ3htQRPUD44S1Ox4NplNGB870t6PPiYoOBDqmbKmYRtl6",
//     fullname: "Nguyễn Vũ Anh Duy",
//     email: "nguyenvuanhduy1905@gmail.com",
//     role: "Staff",
//   },
//   {
//     username: "khanhlinh",
//     password: "$2b$10$mo62g38CJ3htQRPUD44S1Ox4NplNGB870t6PPiYoOBDqmbKmYRtl6",
//     fullname: "Nguyễn Vũ Khánh Linh",
//     email: "nguyenvukhanhlinh0508@gmail.com",
//     role: "Student",
//   },
// ]);

// db.habits.insert([
//   {
//     userID: "5d401313b827562cdabbe600",
//     name: "Swimming on beach",
//     slogan: "Swimng to get health",
//     timeBegin: "2019-07-01T17:00:00.000Z",
//     timeEnd: "2019-08-01T17:00:00.000Z",
//     color: "#4bf542",
//     totalFinishDay: 1,
//     totalUnfinishedDay: 0,
//   },
//   {
//     userID: "5d401313b827562cdabbe601",
//     name: "Football with team",
//     slogan: "Do got get more skill",
//     timeBegin: "2019-07-01T17:00:00.000Z",
//     timeEnd: "2019-08-01T17:00:00.000Z",
//     color: "#4bf542",
//     totalFinishDay: 0,
//     totalUnfinishedDay: 1,
//   },
//   {
//     userID: "5d401313b827562cdabbe600",
//     name: "Get up and call to family",
//     slogan: "call parent and and girlfriend",
//     timeBegin: "2019-07-01T17:00:00.000Z",
//     timeEnd: "2019-08-01T17:00:00.000Z",
//     color: "#f5b342",
//     totalFinishDay: 1,
//     totalUnfinishedDay: 0,
//   },
// ]);

db.checkeddays.insert([
  {
    habitID: "5d401386869f745562891cc1",
    userID: "5d401313b827562cdabbe600",
    dayChecked: "2019-07-03T17:00:00.000Z",
    note: "Done",
    color: "#4bf542",
    status: 1,
  },
  {
    habitID: "5d401386869f745562891cc2",
    userID: "5d401313b827562cdabbe601",
    dayChecked: "2019-07-03T17:00:00.000Z",
    note: "Done",
    color: "#4bf542",
    status: 0,
  },
  {
    habitID: "5d401386869f745562891cc3",
    userID: "5d401313b827562cdabbe600",
    dayChecked: "2019-07-03T17:00:00.000Z",
    note: "Done",
    color: "#f5b342",
    status: 1,
  },
]);
