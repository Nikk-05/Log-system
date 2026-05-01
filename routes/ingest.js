import express from 'express';
import { esClient } from '../elastic.js';

const router = express.Router();

// POST /logs
router.post('/', async (req, res) => {
  try {
    const log = req.body;

    if (!log.message || !log.timestamp) {
      return res.status(400).json({ error: 'Invalid log format' });
    }

    await esClient.index({
      index: 'logs',
      document: log
    });

    res.json({ status: 'Log ingested' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to ingest log' });
  }
});

export default router;