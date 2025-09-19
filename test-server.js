const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Test server is running!');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint is working!' });
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test server running on http://localhost:${PORT}`);
  console.log('Try accessing: http://localhost:3001/test');
});
