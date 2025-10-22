const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from demo/.env
dotenv.config({ path: path.resolve(__dirname, '../demo/.env') });

const app = express();
const port = process.env.PORT || 3000;

// API endpoint to provide the API key
app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
