// src/app.js
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

app.use(express.json());

// Register API routes
app.post('/IntersectionsAPI', apiRouter);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
