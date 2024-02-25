
const { Schema, model } = require('mongoose');

const administradorSchema = new Schema({
    NombreAdmin:String,
    CorreoAdmin:String,
    Contrasena:String,
    Region:String,
    NumEmpleadosPorTurno:String,
    PeriodosTraining:String,
    root:String
});

const  Administrador = model('Administrador', administradorSchema);

module.exports = Administrador;
