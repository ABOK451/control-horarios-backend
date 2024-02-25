const { Schema, model } = require('mongoose');

const empleadoSchema = new Schema({
    Nombre: String,
    AppE: String,
    ApmE: String,
    FechaNac: Date,  
    Correo: String,
    Region: String,
    AreaTrabajo: String,
    Contrato: String,
    TurnoActual: {
        HoraInicial: Date,  
        HoraFinal: Date     
    },
    HorarioTraining: {
        FechaInicio: Date,   
        FechaFin: Date,     
        HoraInicial: Date,   
        HoraFinal: Date      
    }
});

const Empleado = model('Empleado', empleadoSchema);

module.exports = Empleado;
