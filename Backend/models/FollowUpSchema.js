const mongoose = require("mongoose");

const FollowUpSchema = new mongoose.Schema({
  bio: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  date: {
    type: String,
  },
  _adopcion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "formato_adopcion",
  },
  _imgFU: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "imagen",
  },
});

const FollowUp = mongoose.model("follow_up", FollowUpSchema);
module.exports = FollowUp;
