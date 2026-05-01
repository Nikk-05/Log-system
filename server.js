import express from 'express';
import { createIndex } from './elastic.js';
import ingestRoute from './routes/ingest.js';
import searchRoute from './routes/search.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/logs', ingestRoute);
app.use('/search', searchRoute);

// Start server
const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await createIndex();
});



