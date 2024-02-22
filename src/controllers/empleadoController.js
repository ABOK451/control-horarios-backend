const Empleado = require('../models/Empleado');

const empleadoController = {
   create: async (req, res) => {
    try {
        const nuevoEmpleado = new Empleado(req.body);
        const empleadoGuardado = await nuevoEmpleado.save();
        res.status(201).json({
           message: 'Empleado creado exitosamente',
           empleadoId: empleadoGuardado._id
        });
     } catch (error) {
         res.status(500).json({ error: 'Error al crear un nuevo empleado', detalle: error.message });
      }
   },

   getById: async (req, res) => {
      try {
         const empleado = await Empleado.findById(req.params.id);
         if (empleado) {
            res.status(200).json(empleado);
         } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
         }
      } catch (error) {
         res.status(500).json({ error: 'Error al obtener el empleado', detalle: error.message });
      }
   },

   update: async (req, res) => {
      try {
         const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
         if (empleadoActualizado) {
            res.status(200).json(empleadoActualizado);
         } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
         }
      } catch (error) {
         res.status(500).json({ error: 'Error al actualizar el empleado', detalle: error.message });
      }
   },

   delete: async (req, res) => {
    try {
       const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
       if (empleadoEliminado) {
          res.status(200).json({
             message: 'Empleado eliminado exitosamente',
             empleadoId: empleadoEliminado._id
          });
       } else {
          res.status(404).json({ error: 'Empleado no encontrado' });
       }
    } catch (error) {
         res.status(500).json({ error: 'Error al eliminar el empleado', detalle: error.message });
      }
   }
};

module.exports = empleadoController;
