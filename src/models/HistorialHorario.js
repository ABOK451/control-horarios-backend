const { Schema, model } = require('mongoose');

const historialhorarioSchema = new Schema({
    NombreEmpleado: String,
    NombreAdmin: String,
    Turnos: []
});

const HistorialHorario = model('HistorialHorario', historialhorarioSchema);

module.exports = HistorialHorario;
