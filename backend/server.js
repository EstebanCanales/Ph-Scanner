const express = require('express'); // Importa el módulo Express
const bodyParser = require('body-parser'); // Importa el módulo body-parser para analizar los cuerpos de las solicitudes HTTP
const connectDB = require('./config/db'); // Importa la función connectDB desde el archivo db.js en la carpeta config
const phRoutes = require('./routes/phRoutes'); // Importa las rutas desde el archivo phRoutes.js en la carpeta routes
const path = require('path'); // Importa el módulo path para trabajar con rutas de archivos

require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const app = express(); // Crea una instancia de la aplicación Express

// Conectar a la base de datos
connectDB(); // Llama a la función connectDB para establecer la conexión con la base de datos

// Middleware
app.use(bodyParser.json()); // Utiliza el middleware body-parser para analizar los cuerpos de las solicitudes HTTP en formato JSON

// Rutas
app.use('/api', phRoutes); // Utiliza las rutas definidas en phRoutes para las solicitudes que comiencen con /api

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Sirve los archivos estáticos ubicados en la carpeta dist del frontend

// Manejar todas las demás rutas y devolver el archivo index.html del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html')); // Devuelve el archivo index.html del frontend para todas las demás rutas
});

const PORT = process.env.PORT || 3000; // Obtiene el número de puerto del archivo .env o utiliza el puerto 3000 por defecto
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`)); // Inicia el servidor y muestra un mensaje en la consola indicando el puerto en el que está corriendo
