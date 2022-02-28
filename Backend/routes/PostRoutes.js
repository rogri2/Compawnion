const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/PostController');

router.post("/post", post_controller.post_create);
router.put("/post/:id", post_controller.post_update);
router.delete("/post/:id", post_controller.post_delete);
router.get("/post/:id", post_controller.post_getById);
router.get("/post", post_controller.post_getAll);
router.get("/post/user/:id", post_controller.post_getAllUser);

module.exports = router;