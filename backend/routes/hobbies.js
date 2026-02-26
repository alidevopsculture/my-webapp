const express = require('express');
const multer = require('multer');
const path = require('path');
const Hobby = require('../models/Hobby');
const auth = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/hobbies/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// Get all hobbies (public)
router.get('/', async (req, res) => {
  try {
    const hobbies = await Hobby.find().sort({ order: 1, createdAt: -1 });
    res.json(hobbies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create hobby (admin)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const hobby = new Hobby({
      category: req.body.category,
      headline: req.body.headline,
      image: '/uploads/hobbies/' + req.file.filename,
      order: req.body.order || 0
    });
    await hobby.save();
    res.status(201).json(hobby);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update hobby (admin)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const updateData = {
      category: req.body.category,
      headline: req.body.headline,
      order: req.body.order || 0
    };
    if (req.file) updateData.image = '/uploads/hobbies/' + req.file.filename;
    
    const hobby = await Hobby.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(hobby);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete hobby (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Hobby.findByIdAndDelete(req.params.id);
    res.json({ message: 'Hobby deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
