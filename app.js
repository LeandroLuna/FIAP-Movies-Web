const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const moviesMock = {
  movie1: ['Aquaman', ''],
  movie1: ['Aquaman'],
  movie1: ['Aquaman'],
  movie1: ['Aquaman'],
};

const seriesMock = {
  series1: ['Aquaman'],
  series1: ['Aquaman'],
  series1: ['Aquaman'],
  series1: ['Aquaman'],
};

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/details', (req, res) => {
  res.render('detailed/movies');
});

app.listen(3000, () => {
  console.log('Listening port 3000');
});
