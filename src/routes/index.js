const express = require('express');
const router = express.Router();
router.use(express.json());

const empleadoRoutes = require('./empleadoRoutes');
const departamentoRoutes = require('./departamentoRoutes');
const administradorRoutes = require('./administradorRoutes');
const historialRoutes = require('./historialhorariosRoutes');
const horarioRoutes = require('./solicitudhorarioRoutes');
const vacacionesRoutes = require('./solicitudvacacionesRoutes');
const turnoRoutes = require('./turnoRoutes');



router.use('/empleado', empleadoRoutes);
router.use('/departamento', departamentoRoutes);
router.use('/administrador', administradorRoutes);
router.use('/historial', historialRoutes);
router.use('/horario', horarioRoutes);
router.use('/vacaciones', vacacionesRoutes);
router.use('/turno', turnoRoutes);




module.exports = router;
