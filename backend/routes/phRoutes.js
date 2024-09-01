const express = require('express'); // Importa el módulo 'express'
const Ph = require('../models/ph'); // Importa el modelo 'ph' desde el archivo '../models/ph.js'
const router = express.Router(); // Crea una instancia de enrutador de express

// Endpoint para recibir y almacenar datos de pH
router.post('/ph', async (req, res) => {
  try {
    const newPh = new Ph({
      value: req.body.ph // Crea una nueva instancia del modelo 'ph' con el valor del pH recibido en la solicitud
    });
    await newPh.save(); // Guarda el nuevo objeto 'ph' en la base de datos
    res.status(200).send('Dato de pH guardado'); // Envía una respuesta exitosa con un mensaje de éxito
  } catch (err) {
    res.status(500).send('Error al guardar el dato de pH'); // Envía una respuesta de error con un mensaje de error
  }
});

// Endpoint para obtener todos los datos de pH
router.get('/ph', async (req, res) => {
  try {
    const phData = await Ph.find(); // Obtiene todos los objetos 'ph' de la base de datos
    res.status(200).json(phData); // Envía una respuesta exitosa con los datos de pH en formato JSON
  } catch (err) {
    res.status(500).send('Error al obtener los datos de pH'); // Envía una respuesta de error con un mensaje de error
  }
});

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos
