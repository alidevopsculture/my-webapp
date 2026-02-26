const express = require('express');
const multer = require('multer');
const path = require('path');
const CV = require('../models/CV');
const auth = require('../middleware/auth');

const router = express.Router();

// Multer config for CV uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/cvs/'),
  filename: (req, file, cb) => cb(null, 'CV_' + Date.now() + path.extname(file.originalname))
});
const upload = multer({ 
  storage, 
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files allowed'));
  }
});

// Get active CV (public)
router.get('/active', async (req, res) => {
  try {
    const cv = await CV.findOne({ active: true }).sort({ uploadedAt: -1 });
    if (!cv) return res.status(404).json({ error: 'No CV available' });
    res.json(cv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all CVs (admin)
router.get('/all', auth, async (req, res) => {
  try {
    const cvs = await CV.find().sort({ uploadedAt: -1 });
    res.json(cvs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload CV (admin)
router.post('/upload', auth, upload.single('cv'), async (req, res) => {
  try {
    // Deactivate all previous CVs
    await CV.updateMany({}, { active: false });
    
    const cv = new CV({
      filename: req.file.originalname,
      filepath: `/uploads/cvs/${req.file.filename}`,
      version: req.body.version || '1.0',
      active: true
    });
    await cv.save();
    res.status(201).json(cv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Set active CV (admin)
router.patch('/:id/activate', auth, async (req, res) => {
  try {
    await CV.updateMany({}, { active: false });
    const cv = await CV.findByIdAndUpdate(req.params.id, { active: true }, { new: true });
    res.json(cv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete CV (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await CV.findByIdAndDelete(req.params.id);
    res.json({ message: 'CV deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
