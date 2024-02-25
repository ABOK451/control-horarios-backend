const express = require('express');
const router = express.Router();


const departamentoController = require('../controllers/departamentoController');

router.post('/', departamentoController.create);
router.get('/', departamentoController.getAll);
router.get('/:id', departamentoController.getById);
router.put('/:id', departamentoController.update);
router.delete('/:id', departamentoController.delete);

module.exports = router;