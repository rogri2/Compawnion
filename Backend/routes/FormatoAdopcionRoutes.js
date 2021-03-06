const express = require('express');
const router = express.Router();

const format_adopcion_controller = require('../controllers/FormatoAdopcionController');

router.post("/formato_adopcion", format_adopcion_controller.formato_adopcion_create);
router.put("/formato_adopcion/:solicitudId", format_adopcion_controller.formato_adopcion_update);
router.delete("/formato_adopcion/:solicitudId", format_adopcion_controller.formato_adopcion_delete);
router.get("/formato_adopcion/:solicitudId", format_adopcion_controller.formato_adopcion_getById);
router.get("/formato_adopcion", format_adopcion_controller.formato_adopcion_getAll);
router.get("/formato_adopcion/usuario/:usuarioId", format_adopcion_controller.formato_adopcion_getAllAdoptedByUser);

module.exports = router;