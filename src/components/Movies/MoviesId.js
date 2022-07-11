import { useParams } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { FetchInformationMovies } from 'service/FetchMovies';
import { constans } from 'helpers/constans';

const { home, cast, reviews } = constans;

function MoviesId() {
  const [post, setPost] = useState([]);
  const params = useParams();

  useEffect(() => {
    const data = async () => {
      await FetchInformationMovies(params.movieId)
        .then(res => setPost(res))
        .catch(err => console.log(err.message));
    };
    data();
  }, [params.movieId]);

  console.log(post);
  const { genres, vote_average, title, overview, poster_path } = post;
  console.log(poster_path);
  return (
    <>
      <Link to={home}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
            <Link to={cast}>Cast</Link>
          </li>
          <li>
            <Link to={reviews}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default memo(MoviesId);
