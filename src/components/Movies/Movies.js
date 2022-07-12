import { useState } from 'react';
import { Outlet, Link, useLocation, useSearchParams } from 'react-router-dom';
import { FetchSearchMovie } from 'service/FetchMovies';
import { constans } from 'helpers/constans';

const { movies } = constans;

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchFilm, setSearch] = useState({});
  const [err, setErr] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('name') ?? '';
  searchParams.get('query');
  console.log('location', location);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') return;
    FetchSearchMovie(query)
      .then(res => setSearch(res))
      .catch(error => setErr(error.message));
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const { results, total_results } = searchFilm;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} />

        <button type="submit">Search</button>
      </form>
      {results ? (
        <ul>
          {results.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <Link
                  to={`${movies}/${id}`}
                  state={{ movies, from: `/movies?query=${query}` }}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      {total_results === 0 ? <p>Введіть правильну назву фільма</p> : null}
      {err ? <p>Такий фільм не знайденно {err}</p> : null}
      <Outlet />
    </>
  );
}
