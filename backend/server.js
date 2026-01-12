import express from 'express';
import cors from 'cors';
import { getRandomWord } from './words.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all origins (since this is a simple party game)
app.use(cors());

// API endpoint to get a random word
app.get('/api/random-word', (req, res) => {
  try {
    const word = getRandomWord().toLowerCase();
    res.json({ word });
  } catch (error) {
    console.error('Error getting random word:', error);
    res.status(500).json({ error: 'Failed to get random word' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🎮 Imposter backend running on http://localhost:${PORT}`);
  console.log(`📝 Word API available at http://localhost:${PORT}/api/random-word`);
});

