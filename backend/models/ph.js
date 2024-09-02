const mongoose = require('mongoose');

const phSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ph', phSchema);
