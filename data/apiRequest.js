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
    return `Movie req. error: ${e.message}`;
  }
};

module.exports.seriesApi = async (API_KEY) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
    const data = await blob.json();
    return data;
  } catch (e) {
    return `Serie req. error: ${e.message}`;
  }
};
