import express from 'express';
import { esClient } from '../elastic.js';
import { buildQuery } from '../utils/buildQuery.js';

const router = express.Router();

// GET /search
router.get('/', async (req, res) => {
  try {
    const query = buildQuery(req.query);

    const result = await esClient.search({
      index: 'logs',
      query
    });

    const logs = result.hits.hits.map(hit => hit._source);

    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Search failed' });
  }
});

export default router;