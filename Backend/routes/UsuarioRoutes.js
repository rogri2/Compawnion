const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/UsuarioController');

router.post("/usuario", usuario_controller.usuario_create);
router.put("/usuario/:id", usuario_controller.usuario_update);
router.delete("/usuario/:id", usuario_controller.usuario_delete);
router.get("/usuario/:id", usuario_controller.usuario_getById);

module.exports = router;