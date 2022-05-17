const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    _usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },
    name: {
        type: String,
        required: true,
        
    },
    isDog: {
        type: Boolean,
        required: true
    },
    isMale: {
        type: Boolean,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
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
    date: {
        type: String
    },
    _imgPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "imagen"
    }
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;