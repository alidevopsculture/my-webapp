const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
  version: { type: String, default: '1.0' },
  active: { type: Boolean, default: true },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CV', cvSchema);
