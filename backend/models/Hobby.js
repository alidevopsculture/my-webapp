const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
  category: { type: String, required: true },
  headline: { type: String, required: true },
  image: { type: String, required: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hobby', hobbySchema);
