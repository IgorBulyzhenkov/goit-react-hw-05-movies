import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchPopularMovies } from 'service/FetchMovies';
import { constans } from 'helpers/constans';

const {movies } = constans;
export default function HomeList() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    FetchPopularMovies()
      .then(res => setPost(res.results))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      <ul>
        {post.map(({ title, id }) => {
          //   console.log(id);
          return (
            <li key={id}>
              <Link to={`${movies}/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
