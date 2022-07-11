import { Routes, Route } from 'react-router-dom';
import Navigator from './Navigator/Navigator';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { constans } from 'helpers/constans';
import MoviesId from './Movies/MoviesId';
import Cast from './Movies/Cast';

const { home, movies, movieId, cast, reviews } = constans;

export const App = () => {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path={home} element={<Home />}></Route>
        <Route path={movies} element={<Movies />} />
        {/* <Route path={movieId} element={<MoviesId />} >
        </Route> */}
        <Route path={`${movies}/${movieId}`} element={<MoviesId />}>
          <Route path={cast} element={<Cast />}></Route>
          <Route path={reviews} element={''}></Route>
        </Route>
      </Routes>
    </div>
  );
};
