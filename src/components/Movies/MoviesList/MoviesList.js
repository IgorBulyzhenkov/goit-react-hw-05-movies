import s from './MoviesList.module.css';
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
  const backSearch = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: name });
    setName('');
  };

  useEffect(() => {
    if (backSearch === null) return;
    FetchSearchMovie(backSearch)
      .then(res => {
        setSearchFilm(res);
        return setErr('');
      })
      .catch(error => setErr(error.message));
  }, [backSearch]);

  const handleChange = ({ target: { value } }) => {
    setName(value.trim());
  };

  const { results, total_results } = searchFilm;

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.input}
        />

        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      {results ? (
        <ul>
          {results.map(({ id, original_title }) => {
            return (
              <li key={id} className={s.item}>
                <Link
                  to={`${movies}/${id}`}
                  state={{ movies, from: `/movies?query=${backSearch}` }}
                  className={s.link}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      {total_results === 0 ? (
        <p className={s.title}>Введіть правильну назву фільма</p>
      ) : null}
      {err ? <p className={s.title}>Такий фільм не знайденно {err}</p> : null}
      <Outlet />
    </>
  );
}
