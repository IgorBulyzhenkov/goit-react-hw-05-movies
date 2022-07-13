import s from './MoviesId.module.css';
import {
  Outlet,
  useLocation,
  useParams,
  useNavigate,
  Link,
} from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { FetchInformationMovies } from 'service/FetchMovies';
import { constans } from 'helpers/constans';

const { cast, reviews, movies } = constans;

function MoviesId() {
  const [post, setPost] = useState([]);
  const [err, setErr] = useState('');
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    FetchInformationMovies(params.movieId)
      .then(res => setPost(res))
      .catch(err => setErr(err.message));
  }, [params.movieId]);

  const handleClick = () => {
    navigate(location.state.from, { replace: false });
  };
  const { genres, vote_average, title, overview, poster_path } = post;

  return (
    <>
      {!err ? (
        <>
          <button type="button" onClick={handleClick} className={s.btn}>
            Go back
          </button>
          <div className={s.card}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
              }
              alt={`${title} !== '' ? ${title} : 'No info!'`}
              width="300"
              className={s.img}
            />
          </div>
          <div className={s.content}>
            <h2 className={s.name}>{title}</h2>
            <p className={s.title}>User score: {vote_average * 10}%</p>
            <ul className={s.list}>
              <li>
                <h3 className={s.name_over}>Overview</h3>
                <p>{overview}</p>
              </li>
              <li className={s.item}>
                <p className={s.text}>Genres</p>
                <ul className={s.listGenras}>
                  {genres?.map(({ name, id }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <p className={s.text}>Additional information</p>
            <div className={s.coment}>
              <ul className={s.listGenras}>
                <li className={s.item_link}>
                  <Link
                    to={`${movies}/${params.movieId}/${cast}`}
                    state={{ movies, from: location.state.from }}
                    className={s.link}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${movies}/${params.movieId}/${reviews}`}
                    state={{ movies, from: location.state.from }}
                    className={s.link}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </>
      ) : (
        <p className={s.title_err}>Вибачте такий фільм не знайденно {err}</p>
      )}
    </>
  );
}

export default memo(MoviesId);
