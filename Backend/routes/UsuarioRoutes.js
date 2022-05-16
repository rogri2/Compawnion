const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/UsuarioController');

router.post("/usuario", usuario_controller.usuario_create);
router.put("/usuario/:usuarioId", usuario_controller.usuario_update);
router.delete("/usuario/:usuarioId", usuario_controller.usuario_delete);
router.get("/usuario/:usuarioId", usuario_controller.usuario_getById);

module.exports = router;