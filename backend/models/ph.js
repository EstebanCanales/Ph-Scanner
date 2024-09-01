const mongoose = require('mongoose');

/**
 * Esquema para el pH.
 * @typedef {Object} PhSchema
 * @property {Number} value - Valor del pH.
 * @property {Date} timestamp - Marca de tiempo del pH.
 */

// Ejemplo de uso:
const ph = new PhSchema();
ph.value = 7.0;
ph.timestamp = new Date();
const phSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ph', phSchema);
