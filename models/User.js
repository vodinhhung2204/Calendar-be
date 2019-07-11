const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const emailValidator = [
  val => validator.isEmail(val),
  "Email is Incorrect format",
];
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username is requied",
  },
  password: {
    type: String,
    required: "Username is requied",
  },
  fullname: {
    type: String,
    required: "Fullname is requied",
  },
  email: {
    type: String,
    required: "Email is required",
    validate: emailValidator,
  },
  role: { type: String },
});
userSchema.methods.comparePassword = (password, encode) => bcrypt.compareSync(password, encode);
userSchema.methods.getHash = password => bcrypt.hashSync(password, 10);

module.exports = mongoose.model("User", userSchema);
