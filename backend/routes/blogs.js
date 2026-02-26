const express = require('express');
const multer = require('multer');
const path = require('path');
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

const router = express.Router();

// Multer config for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/blogs/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// Get all blogs (public)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single blog (public)
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all blogs including drafts (admin)
router.get('/admin/all', auth, async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create blog (admin)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const blogData = {
      ...req.body,
      image: req.file ? `/uploads/blogs/${req.file.filename}` : null,
      tags: req.body.tags ? JSON.parse(req.body.tags) : []
    };
    const blog = new Blog(blogData);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update blog (admin)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      updatedAt: Date.now(),
      tags: req.body.tags ? JSON.parse(req.body.tags) : []
    };
    if (req.file) updateData.image = `/uploads/blogs/${req.file.filename}`;
    
    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete blog (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
