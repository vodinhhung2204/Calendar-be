const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const expressJwt = require("express-jwt");

const config = require("../config/index");
const User = require("../models/User");

async function getById(_id) {
  const user = await User.findById({ _id });
  return user || null;
}
function jwtFunc() {
  const { secret } = config;
  return expressJwt(
    {
      secret,
      async function(req, payload, done) {
        const user = await getById(payload.userID);
        // revoke token if user no longer exists
        if (!user) {
          return done(null, true);
        }
        return done();
      },
    },
  ).unless({
    path: [
      // public routes that don't require authentication
      "/register",
      "/login",
    ],
  });
}

async function login(username, password) {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ userID: user._id }, config.secret);
    return {
      status: "true",
      token,
    };
  }
  return null;
}

async function getAll() {
  const users = await User.find();
  return users || null;
}

module.exports = {
  login,
  getAll,
  getById,
  jwtFunc,
};
