const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true,
    },
    pass: {
        type: String,
        required: true,
        minlength: 8
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    _imgUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "imagen"
    }
});

const Usuario = mongoose.model("usuario", UsuarioSchema);
module.exports = Usuario;

