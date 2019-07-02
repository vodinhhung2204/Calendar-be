const mongoose = require('mongoose');

const { Schema } = mongose;

const Role = new Schema(
  {
    nameRole: {type: String}
  }
);

module.exports = mongoose.model('Role', Role);