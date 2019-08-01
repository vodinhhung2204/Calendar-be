
module.exports = {
  env: process.env.NODE_ENV || "development",
  server: {
    port: process.env.PORT || 3005,
  },
  logging: {
    level: process.env.LOG_LEVEL || "debug",
  },
  secret: "codeenginestudio",
  db: "mongodb://vodinhhung:abc123456@ds157857.mlab.com:57857/calendar",
};
