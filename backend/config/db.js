const mongoose = require('mongoose');

require('dotenv').config();

// Codifica el nombre de usuario y la contraseña para usar en la URI de conexión
const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);

// Construye la URI de conexión a la base de datos de MongoDB
const uri = `mongodb+srv://${username}:${password}@cluster0.k3jgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    // Conecta a la base de datos utilizando la URI y las opciones de configuración
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB conectado yei');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;