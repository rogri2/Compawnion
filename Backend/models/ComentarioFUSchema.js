const mongoose = require('mongoose');

const ComentarioFUSchema = new mongoose.Schema({
    _usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    _followUp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "follow_up",
        required: true
    },
    texto: {
        type: String,
        required: true,
        maxlength: 120
    },
    date: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const ComentarioFU = mongoose.model("comentario_FU", ComentarioFUSchema);
module.exports = ComentarioFU;