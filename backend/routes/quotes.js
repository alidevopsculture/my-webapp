const express = require('express');
const multer = require('multer');
const path = require('path');
const Quote = require('../models/Quote');
const auth = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/quotes/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } });

// Get active quotes (public)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find({ active: true }).sort({ order: 1, createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all quotes (admin)
router.get('/all', auth, async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create quote (admin)
router.post('/', auth, upload.single('profileImage'), async (req, res) => {
  try {
    const quote = new Quote({
      text: req.body.text,
      profileImage: req.file ? '/uploads/quotes/' + req.file.filename : null,
      active: req.body.active !== undefined ? req.body.active : true,
      order: req.body.order || 0
    });
    await quote.save();
    res.status(201).json(quote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update quote (admin)
router.put('/:id', auth, upload.single('profileImage'), async (req, res) => {
  try {
    const updateData = {
      text: req.body.text,
      active: req.body.active,
      order: req.body.order || 0
    };
    if (req.file) updateData.profileImage = '/uploads/quotes/' + req.file.filename;
    
    const quote = await Quote.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete quote (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ message: 'Quote deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Like quote (public)
router.post('/:id/like', async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Share quote (public)
router.post('/:id/share', async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      { $inc: { shares: 1 } },
      { new: true }
    );
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
