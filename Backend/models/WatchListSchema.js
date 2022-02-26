const mongoose = require('mongoose');

const WatchListSchema = new mongoose.Schema({
    _usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
    },
    _posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        }
    ]
});

const WatchList = mongoose.model("watch_list", WatchListSchema);
module.exports = WatchList;