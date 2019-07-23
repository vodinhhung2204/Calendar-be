###1 NAME DATABASE: Calendar

###2 Creating Database and Inserting User Data into Calendar:
  mongo Calendar < UserDB.js

###3 Creating Database and Inserting Habit Data into Calendar:
  mongo Calendar < HabitDB.js

###4 Creating Database and Inserting Checked Day Data into Calendar:
  mongo Calendar < CheckedDayDB.js

###5 If error:
  sudo mongod --repair
  sudo mongod

###6 Connecting Calendar Database
  mongo
  