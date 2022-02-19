const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    name: {
        type: String
    },
});

const Test = mongoose.model("test", TestSchema);
module.exports = Test;