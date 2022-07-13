import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigator from './Navigator/Navigator';
import Home from './Home/Home';
import { constans } from 'helpers/constans';

const Movies = lazy(() =>
  import('./Movies/Movies' /* webpackChunkName: "Movies" */)
);
const Reviews = lazy(() =>
  import('./Movies/Reviews' /* webpackChunkName: "Reviews" */)
);
const Cast = lazy(() => import('./Movies/Cast' /* webpackChunkName: "Cast" */));
const MoviesId = lazy(() =>
  import('./Movies/MoviesId' /* webpackChunkName: "MoviesId" */)
);

const { home, movies, movieId, cast, reviews } = constans;

export const App = () => {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path={home} element={<Home />}></Route>

        <Route
          path={movies}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />

        <Route
          path={`${movies}/${movieId}`}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MoviesId />
            </Suspense>
          }
        >
          <Route
            path={cast}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path={reviews}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
