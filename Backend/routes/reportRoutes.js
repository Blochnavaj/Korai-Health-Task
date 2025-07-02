 import express from 'express';
import upload from '../middlewares/uploadMiddleware.js';
import extractReport from '../controllers/reportController.js';

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res, next) => {
  extractReport(req, res).catch(next);
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error('Upload error:', err);
  res.status(500).json({ error: err.message || 'Server processing error' });
});

export default router;