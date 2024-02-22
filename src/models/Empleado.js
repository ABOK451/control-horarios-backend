const { Schema, model } = require('mongoose');

const empleadoSchema = new Schema({
    Nombre: String,
    AppE: String,
    ApmE: String,
    FechaNac: Date,  // Cambiado a Date
    Correo: String,
    Region: String,
    AreaTrabajo: String,
    Contrato: String,
    TurnoActual: {
        HoraInicial: Date,  // Cambiado a Date
        HoraFinal: Date     // Cambiado a Date
    },
    HorarioTraining: {
        FechaInicio: Date,   // Cambiado a Date
        FechaFin: Date,      // Cambiado a Date
        HoraInicial: Date,   // Cambiado a Date
        HoraFinal: Date      // Cambiado a Date
    }
});

const Empleado = model('Empleado', empleadoSchema);

module.exports = Empleado;
