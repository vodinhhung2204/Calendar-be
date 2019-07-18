const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const expressJwt = require("express-jwt");

const config = require("../config/index");
const User = require("../models/User");

async function getById(id) {
  const user = await User.findById(id);
  return user || null;
}
function jwtFunc() {
  const { secret } = config;
  return expressJwt(
    {
      secret,
      async function(req, payload, done) {
        const user = await getById(payload.sub);
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
    const token = jwt.sign({ payload: user._id }, config.secret);
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
