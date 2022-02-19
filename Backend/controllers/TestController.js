const Test = require('../models/TestSchema');

exports.test_create = async (req, res) => {
    const { body } = req;

    let newTest = new Test(body);
    await newTest.save();

    res.send(newTest);
};