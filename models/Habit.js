const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  idUser: {
    type: String,
    required: "idUser is required !",
  },
  name: {
    type: String,
    required: "Name is required !",
  },
  slogan: {
    type: String,
    required: "Slogan is required !",
  },
  timeBegin: {
    type: Date,
    required: "timeBegin is required !",
  },
  timeEnd: { type: Date },
  after: { type: Number },
  repeat: [{ type: Number }],
  color: {
    type: String,
    required: "Color is required !",
  },
});

habitSchema.methods.getAfter = (timeBegin, timeEnd) => {
  const secondsTime = timeEnd.getTime() - timeBegin.getTime();
  return secondsTime / (1000 * 3600 * 24);
};

module.exports = mongoose.model("Habit", habitSchema);
