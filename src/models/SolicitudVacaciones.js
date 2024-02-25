const { Schema, model } = require('mongoose');

const solicitudvacacionesSchema = new Schema({
    NombreEmpleado:String,
    NombreAdmin:String,
    FechaSolicitud:["FechaInicioVacaciones","FechaTerminoVacaciones"],
    EstadoSolicitud:String
});

const  SolicitudVacaciones = model('SolicitudVacaciones', solicitudvacacionesSchema);

module.exports = SolicitudVacaciones ;