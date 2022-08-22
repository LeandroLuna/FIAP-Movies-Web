const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const { mediaMock, actorsMock } = require('./data/mock');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', { mediaMock });
});

function generateRandomCast() {
  let i = 0;
  const arr = [];

  while (i < 4) {
    const randomNumber = Math.floor(Math.random() * 7);
    if (!arr.includes(actorsMock[randomNumber])) {
      arr.push(actorsMock[randomNumber]);
      i++;
    }
  }
  return arr;
}

app.get('/movie/:id', (req, res) => {
  const id = req.params.id;
  const movie = mediaMock.find((media) => media.id == id);
  const cast = generateRandomCast();
  res.render('detailed/movies', { movie, cast });
});

app.get('/serie/:id', (req, res) => {
  const id = req.params.id;
  const serie = mediaMock.find((media) => media.id == id);
  const cast = generateRandomCast();
  res.render('detailed/series', { serie, cast });
});

// Debugging
// app.listen(3000, () => {
//   console.log('Listening port 3000');
// });
