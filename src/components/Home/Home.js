import s from './Home.module.css';
import HomeList from '../HomeList/HomeList';

function Home() {
  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <HomeList />
    </>
  );
}

export default Home;
