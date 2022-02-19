const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5000;
require('./models/connection')

const test_router = require('./routes/TestRoutes');

app.use(bodyParser.json());

app.use('/api', test_router);

app.listen(port, () => {
    console.log("La aplicación está escuchando al puerto " + port);
});