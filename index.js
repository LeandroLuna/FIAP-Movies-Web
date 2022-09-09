const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const fetch = require('node-fetch');

const { moviesApi, seriesApi } = require('./data/apiRequest');
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
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`).then((res) => res.json());
  const casting = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt_BR`).then((res) => res.json());
  res.render('detailed/movies', { movie, casting });
});

app.get('/serie/:id', async (req, res) => {
  const id = req.params.id;
  const serie = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`).then((res) => res.json());
  const casting = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=pt_BR`).then((res) => res.json());
  res.render('detailed/series', { serie, casting });
});

app.listen(3000, () => {
  console.log('Listening port 3000');
});
