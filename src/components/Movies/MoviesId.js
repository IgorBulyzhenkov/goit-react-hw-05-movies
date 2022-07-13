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
          <button type="button" onClick={handleClick}>
            Go back
          </button>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
              }
              alt={`${title} !== '' ? ${title} : 'No info!'`}
              width="300"
            />
            <h2>{title}</h2>
            <p>User score: {vote_average * 10}%</p>
            <ul>
              <li>
                <h3>Overview</h3>
                <p>{overview}</p>
              </li>
              <li>
                Genres
                <ul>
                  {genres?.map(({ name, id }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <p>Additional information</p>
            <ul>
              <li>
                <Link
                  to={`${movies}/${params.movieId}/${cast}`}
                  state={{ movies, from: location.state.from }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`${movies}/${params.movieId}/${reviews}`}
                  state={{ movies, from: location.state.from }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      ) : (
        <p>Вибачте такий фільм не знайденно {err}</p>
      )}
    </>
  );
}

export default memo(MoviesId);
