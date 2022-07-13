import s from './Cast.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchCreditsMovie } from 'service/FetchMovies';

export default function Cast() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [err, setErr] = useState('');


  useEffect(() => {
    FetchCreditsMovie(params.movieId)
      .then(res => setPost(res))
      .catch(err => setErr(err.message));
  }, [params.movieId]);

  const { cast } = post;

  return (
    <>
      {cast?.length > 0 ? (
        <>
          <ul className={s.list}>
            {cast.splice(0, 20).map(({ character, name, profile_path, id }) => {
              return (
                <li key={id} className={s.item}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
                    }
                    alt={name}
                    width="208"
                    height="300"
                    className={s.img}
                  />
                  <h3 className={s.title}>{name}</h3>
                  <p className={s.text}>
                    <span className={s.span}>Character </span>: {character}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p className={s.title_err}>Вибачте таких акторів не знайденно </p>
      )}
      {err ?? (
        <p className={s.title_err}>Вибачте таких акторів не знайденно {err}</p>
      )}
    </>
  );
}
