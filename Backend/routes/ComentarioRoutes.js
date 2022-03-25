const express = require('express');
const router = express.Router();

const comentario_controller = require('../controllers/ComentarioController');

router.post("/comentario", comentario_controller.comentario_create);
router.put("/comentario/:id", comentario_controller.comentario_update);
router.delete("/comentario/:id", comentario_controller.comentario_delete);
router.get("/comentario/:id", comentario_controller.comentario_getById);
router.get("/comentario/post/:id", comentario_controller.comentario_getAll);

module.exports = router;