const express = require('express');
const app = express();
const mongoose = require('mongoose');  // Asegúrate de importar mongoose

// Configuración de la conexión a MongoDB
mongoose.connect('mongodb://root:root@localhost:27017/ControlHorarios', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Manejo de eventos de conexión a MongoDB
db.on('error', (error) => {
    console.error('Error en la conexión a MongoDB:', error);
});

db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');

    // Rutas con prefijo /api
    app.use('/api', require('./routes/index'));

    // Inicia el servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
});

// Middleware para el manejo de errores de conexión a MongoDB
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});

// Exporta la instancia de express para poder utilizarla en tus rutas
module.exports = app;
