// License:
// 'The Movie Database API'
// Try different endpoints here: https://developers.themoviedb.org/3/getting-started/introduction

const fetch = require('node-fetch');

module.exports.moviesApi = async (API_KEY) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`);
    const data = await blob.json();
    return data;
  } catch (e) {
    console.log(e);
    return `Movies req. error: ${e.message}`;
  }
};

module.exports.seriesApi = async (API_KEY) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
    const data = await blob.json();
    return data;
  } catch (e) {
    console.log(e);
    return `Series req. error: ${e.message}`;
  }
};

module.exports.findMovie = async (API_KEY, movie_id) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=pt-BR`);
    const data = await blob.json();
    return data;
  } catch (e) {
    console.log(e);
    return `Find movie req. error: ${e.message}`;
  }
};

module.exports.movieCasting = async (API_KEY, movie_id) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=pt_BR`);
    const data = await blob.json();
    return data;
  } catch (e) {
    console.log(e);
    return `Movie casting req. error: ${e.message}`;
  }
};

module.exports.findSerie = async (API_KEY, serie_id) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/tv/${serie_id}?api_key=${API_KEY}&language=pt-BR`);
    const data = await blob.json();
    return data;
  } catch (e) {
    console.log(e);
    return `Find serie req. error: ${e.message}`;
  }
};

module.exports.serieCasting = async (API_KEY, serie_id) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/tv/${serie_id}/credits?api_key=${API_KEY}&language=pt_BR`);
    const data = await blob.json();
    return data;
  } catch (e) {
    console.log(e);
    return `Serie casting req. error: ${e.message}`;
  }
};
