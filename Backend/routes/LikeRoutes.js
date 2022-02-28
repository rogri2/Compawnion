const express = require('express');
const router = express.Router();

const like_controller = require('../controllers/LikeController');

router.post("/like", like_controller.like_create);
router.put("/like/:id", like_controller.like_update);
router.get("/like/:id", like_controller.like_getAll);

module.exports = router;