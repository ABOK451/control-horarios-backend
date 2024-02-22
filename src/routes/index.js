const express = require('express');
const router = express.Router();
router.use(express.json());

const empleadoRoutes = require('./empleadoRoutes');

router.use('/empleado', empleadoRoutes);

module.exports = router;
