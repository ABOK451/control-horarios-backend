const { Schema, model } = require('mongoose');

const solicitudhorarioSchema = new Schema({
    NombreEmpleado: String,
    NombreAdmin: String,
    Contrato: String,
    Turno: [],
    EstadoSolicitud: String,
    Correo: String,
    Razon: String
});

const SolicitudHorario = model('SolicitudHorario', solicitudhorarioSchema);

module.exports = SolicitudHorario;
