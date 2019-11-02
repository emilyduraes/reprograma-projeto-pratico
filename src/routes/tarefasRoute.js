const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefasController');

router.get("/", controller.get);
router.get("/concluidas/filtrar", controller.getConcludedTasks);
router.get("/data/filtrar", controller.getSortedDate);
router.get("/:id", controller.getById);
router.get("/:colaborador/buscar", controller.getByName);


module.exports = router;