import s from './HomeList.module.css' 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchPopularTodayMovies } from 'service/FetchMovies';
import { constans } from 'helpers/constans';

const { movies, home } = constans;

export default function HomeList() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    FetchPopularTodayMovies()
      .then(res => setPost(res.results))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      <ul className={s.list}>
        {post.map(({ original_name, title, id }) => {
          return (
            <li key={id} className={s.item}>
              <Link
                to={`${movies}/${id}`}
                state={{ home, from: '/' }}
                className={s.link}
              >
                {original_name ?? title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
