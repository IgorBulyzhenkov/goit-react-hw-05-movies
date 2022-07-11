import axios from 'axios';

const KEY = 'a58722f838c8d26ddb69fc30e1450e3c';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

async function FetchPopularMovies() {
  const popularFilm = await axios.get(
    `${BASE_URL}popular?api_key=${KEY}&language=en-US&page=1`
  );

  return popularFilm.data;
}

async function FetchInformationMovies(id) {
  const popularFilm = await axios.get(
    `${BASE_URL}${id}?api_key=${KEY}&language=en-US&page=1`
  );

  return popularFilm.data;
}

export { FetchPopularMovies, FetchInformationMovies };
