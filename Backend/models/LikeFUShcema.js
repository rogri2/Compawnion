const mongoose = require('mongoose');

const LikeFUSchema = new mongoose.Schema({
    _usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    _post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const LikeFU = mongoose.model("like_FU", LikeFUSchema);
module.exports = LikeFU;