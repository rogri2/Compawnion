const express = require('express');
const router = express.Router();

const imagen_controller = require('../controllers/ImagenController');

router.post("/imagen", imagen_controller.imagen_create);
router.put("/imagen/:id", imagen_controller.imagen_update);
router.get("/imagen/:id", imagen_controller.imagen_getById);

module.exports = router;