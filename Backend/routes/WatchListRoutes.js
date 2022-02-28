const express = require('express');
const router = express.Router();

const watch_list_controller = require('../controllers/WatchListController');

router.post("/watch_list", watch_list_controller.watch_list_create);
router.put("/watch_list/:id", watch_list_controller.watch_list_update);
router.delete("/watch_list/:id", watch_list_controller.watch_list_delete);
router.get("/watch_list/:id", watch_list_controller.watch_list_getById);

module.exports = router;