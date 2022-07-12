import axios from 'axios';

const KEY = 'a58722f838c8d26ddb69fc30e1450e3c';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function FetchPopularTodayMovies() {
  const popularFilm = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${KEY}&language=en-US&page=1`
  );

  return popularFilm.data;
}

async function FetchInformationMovies(id) {
  const popularFilm = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  );

  return popularFilm.data;
}

async function FetchCreditsMovie(id) {
  const popularFilm = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US&page=1`
  );
  return popularFilm.data;
}

async function FetchReviewsMovie(id) {
  const popularFilm = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );

  return popularFilm.data;
}

async function FetchSearchMovie(name) {
  const popularFilm = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${name}&page=1&include_adult=false`
  );

  return popularFilm.data;
}

export {
  FetchPopularTodayMovies,
  FetchInformationMovies,
  FetchCreditsMovie,
  FetchReviewsMovie,
  FetchSearchMovie,
};
