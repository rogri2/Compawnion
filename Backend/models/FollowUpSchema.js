const mongoose = require('mongoose');

const FollowUpSchema = new mongoose.Schema({
    bio: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    _post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
    },
    _imgFU: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "imagen",
            required: true
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "imagen"
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "imagen"
        }
    ]
});

const FollowUp = mongoose.model("follow_up", FollowUpSchema);
module.exports = FollowUp;