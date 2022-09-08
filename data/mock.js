const fetch = require('node-fetch');
module.exports.mediaMock = [
  {
    id: 1,
    title: 'Mergulhador',
    rating: '9,6',
    originalTitle: 'The diver',
    cover: '/images/covers/filme1/capaFilme1.jpg',
    bg: '/images/covers/filme1/bgFilme1.jpg',
    originalLanguage: 'Inglês',
    budget: 'US$50 milhões',
    income: 'US$150 milhões',
    releaseDate: '14/09/2022',
  },
  {
    id: 2,
    title: 'Palhaço assassino',
    rating: '8,8',
    originalTitle: 'The killer joker',
    cover: '/images/covers/filme2/capaFilme2.jpg',
    bg: '/images/covers/filme2/bgFilme2.jpg',
    originalLanguage: 'Holandês',
    budget: 'US$50 milhões',
    income: 'US$150 milhões',
    releaseDate: '14/09/2022',
  },
  {
    id: 3,
    title: 'O Faról',
    rating: '6,4',
    originalTitle: 'The lighthouse',
    cover: '/images/covers/filme3/capaFilme3.jpg',
    bg: '/images/covers/filme3/bgFilme3.jpg',
    originalLanguage: 'Aústrico',
    budget: 'US$10 milhões',
    income: 'US$100 milhões',
    releaseDate: '12/03/2017',
  },
  {
    id: 4,
    title: 'Cabelos em chamas',
    rating: '10',
    originalTitle: 'Fire hair',
    cover: '/images/covers/filme4/capaFilme4.jpg',
    bg: '/images/covers/filme4/bgFilme4.jpg',
    originalLanguage: 'Francês',
    budget: 'US$80 milhões',
    income: 'US$230 milhões',
    releaseDate: '19/02/2021',
  },
  {
    id: 5,
    title: 'O último adeus',
    rating: '9,9',
    originalTitle: 'The last goodbye',
    cover: '/images/covers/filme5/capaFilme5.jpg',
    bg: '/images/covers/filme5/bgFilme5.jpg',
    originalLanguage: 'Alemão',
    budget: 'US$55 milhões',
    income: 'US$123 milhões',
    releaseDate: '13/12/2020',
  },
];

module.exports.actorsMock = [
  {
    name: 'Josiah Charles',
    character: 'Christopher Wright',
    photo: '/images/portraits/dude1.jpg',
  },
  {
    name: 'Hector Cory',
    character: 'John Roberts ',
    photo: '/images/portraits/dude2.jpg',
  },
  {
    name: 'Jeltje Kandaĵa',
    character: 'Patritsiya Vilma',
    photo: '/images/portraits/dude3.jpg',
  },
  {
    name: 'Eric Ciaran',
    character: 'George Clark',
    photo: '/images/portraits/dude4.jpg',
  },
  {
    name: 'Nata Shafiqa',
    character: 'Kailyn Zahida',
    photo: '/images/portraits/dude5.jpg',
  },
  {
    name: 'Marco Gus',
    character: 'Leo Turner',
    photo: '/images/portraits/dude6.jpg',
  },
  {
    name: 'Lėja Hajnalka',
    character: 'Jessie Mihaila',
    photo: '/images/portraits/dude7.jpg',
  },
];

module.exports.moviesApi = async (API_KEY) => {
  try {
    const blob = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`);
    const data = await blob.json();
    return data;
  } catch (e) {
    return `Req. error: ${e.message}`;
  }
};
