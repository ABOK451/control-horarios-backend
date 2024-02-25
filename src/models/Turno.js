const { Schema, model } = require('mongoose');

const turnoSchema = new Schema({
    horaFinal: Date,
    horaInicio: Date,
    NumeroDeEmpleados: Number
});

const Turno = model('Turno', turnoSchema);

module.exports = Turno;
