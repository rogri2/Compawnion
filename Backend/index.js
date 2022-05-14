require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
require('./models/connection')

// Rutas
const comentario_router = require('./routes/ComentarioFURoutes');
const comentarioFU_router = require('./routes/ComentarioRoutes');
const followUP_router = require('./routes/FollowUpRoutes');
const formatoAdopcion_router = require('./routes/FormatoAdopcionRoutes');
const imagen_router = require('./routes/ImagenRoutes');
const likeFU_router = require('./routes/LikeFURoutes');
const like_router = require('./routes/LikeRoutes');
const post_router = require('./routes/PostRoutes');
const usuario_router = require('./routes/UsuarioRoutes');
const watchlist_router = require('./routes/WatchListRoutes');

app.use(bodyParser.json());

// Uso de rutas
app.use('/api', comentario_router);
app.use('/api', comentarioFU_router);
app.use('/api', followUP_router);
app.use('/api', formatoAdopcion_router);
app.use('/api', imagen_router);
app.use('/api', likeFU_router);
app.use('/api', like_router);
app.use('/api', post_router);
app.use('/api', usuario_router);
app.use('/api', watchlist_router);

app.listen(port, () => {
    console.log("La aplicación está escuchando al puerto " + port);
});