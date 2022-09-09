const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const fetch = require('node-fetch');

const { moviesApi, seriesApi, findMovie, movieCasting, findSerie, serieCasting } = require('./data/requests');
const { apiKey } = require('./utils/key');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  const movies = await moviesApi(apiKey);
  const series = await seriesApi(apiKey);
  res.render('home', { movies, series });
});

app.get('/about', async (req, res) => {
  res.render('about');
});

app.get('/movie/:id', async (req, res) => {
  const id = req.params.id;
  const movie = await findMovie(apiKey, id);
  const casting = await movieCasting(apiKey, id);
  res.render('detailed/movies', { movie, casting });
});

app.get('/serie/:id', async (req, res) => {
  const id = req.params.id;
  const serie = await findSerie(apiKey, id);
  const casting = await serieCasting(apiKey, id);
  res.render('detailed/series', { serie, casting });
});

app.listen(3000, () => {
  console.log('Listening port 3000');
});
