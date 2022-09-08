const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const { mediaMock, actorsMock, moviesApi } = require('./data/mock');
const { apiKey } = require('./utils/key');
const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Creates a random cast for every refresh in movies/tv show.
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

app.get('/', async (req, res) => {
  const movies = await moviesApi(apiKey); // Get Movie/TV Show from external API: https://developers.themoviedb.org/3/getting-started/introduction
  // console.log(movies.results[0]);
  res.render('home', { mediaMock, movies });
});

app.get('/about', async (req, res) => {
  res.render('about');
});

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

app.listen(3000, () => {
  console.log('Listening port 3000');
});
