import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { FetchInformationMovies } from 'service/FetchMovies';
import { constans } from 'helpers/constans';

const { cast, reviews, movies } = constans;

function MoviesId() {
  const [post, setPost] = useState([]);
  const [err, setErr] = useState('');
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  console.log('location', location);

  useEffect(() => {
    FetchInformationMovies(params.movieId)
      .then(res => setPost(res))
      .catch(err => setErr(err.message));
  }, [params.movieId]);

  const handleClick = () => {
    navigate(location.state.from, { replace: true });
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
                  : null
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
                <Link to={`${movies}/${params.movieId}/${cast}`}>Cast</Link>
              </li>
              <li>
                <Link to={`${movies}/${params.movieId}/${reviews}`}>
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
