const mongoose = require('mongoose');

const Role = require('./Role');

const { Schema } = mongose;

const User = new Schema({
  username: { type: String },
  password: { type: String },
  fullname: { type: String },
  email: { type: String },
  nameRole: [Role.nameRole]
});


module.exports = mongoose.model('User', User);