const mongoose = require('mongoose');

const ComentarioFUSchema = new mongoose.Schema({
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
    texto: {
        type: String,
        required: true,
        maxlength: 120
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const ComentarioFU = mongoose.model("comentario_FU", ComentarioFUSchema);
module.exports = ComentarioFU;