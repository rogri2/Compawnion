const express = require('express');
const router = express.Router();

const likeFU_controller = require('../controllers/LikeFUController');

router.post("/likeFU", likeFU_controller.likeFU_create);
router.put("/likeFU/:id", likeFU_controller.likeFU_update);
router.get("/likeFU/:id", likeFU_controller.likeFU_getAll);

module.exports = router;