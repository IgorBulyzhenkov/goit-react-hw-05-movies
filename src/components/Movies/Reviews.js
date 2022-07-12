import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchReviewsMovie } from 'service/FetchMovies';

export default function Reviews() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [err, setErr] = useState('');

  useEffect(() => {
    FetchReviewsMovie(params.movieId)
      .then(res => setPost(res))
      .catch(err => setErr(err.message));
  }, [params.movieId]);

  const { results, total_results } = post;

  return (
    <>
      {total_results > 0 ? (
        <ul>
          {results.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Вибачте таких коментарів не знайденно </p>
      )}
      {err ?? <p>Вибачте таких коментарів не знайденно {err}</p>}
    </>
  );
}
