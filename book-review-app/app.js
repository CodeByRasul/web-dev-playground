const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const reviewsRouter = require('./routes/reviews');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/reviews', reviewsRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});