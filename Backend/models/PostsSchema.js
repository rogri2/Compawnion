const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    _usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },
    nombre: {
        type: String,
        required: true,
        
    },
    bio: {
        type: String,
        required: true
    },
    isDog: {
        type: Boolean,
        required: true
    },
    isAdopted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    _imgPost: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "imagen",
            //required: true
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

const Post = mongoose.model("post", PostSchema);
module.exports = Post;