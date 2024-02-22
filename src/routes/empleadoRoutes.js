const express = require('express');
const router = express.Router();


const empleadoController = require('../controllers/empleadoController');

// Rutas para la colección "Empleado"
router.post('/', empleadoController.create);
router.get('/:id', empleadoController.getById);
router.put('/:id', empleadoController.update);
router.delete('/:id', empleadoController.delete);

module.exports = router;
