const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the Email Your Rep API' });
});

// Define Routes
app.use('/api/templates', require('./routes/templates'));
app.use('/api/reps', require('./routes/reps'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
