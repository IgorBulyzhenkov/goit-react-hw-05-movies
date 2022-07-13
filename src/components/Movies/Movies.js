import { useState, useEffect } from 'react';
import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { FetchSearchMovie } from 'service/FetchMovies';
import { constans } from 'helpers/constans';

const { movies } = constans;

export default function Movies() {
  const [name, setName] = useState('');
  const [searchFilm, setSearchFilm] = useState({});
  const [err, setErr] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');


  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: name });
    setName('');
  };

  useEffect(() => {
    if (query === null) return;
    FetchSearchMovie(query)
      .then(res => setSearchFilm(res))
      .catch(error => setErr(error.message));
  }, [query]);


  const handleChange = ({ target: { value } }) => {
    setName(value.trim());
  };

  const { results, total_results } = searchFilm;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} />

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
