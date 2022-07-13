import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './Navigator.module.css';
import { constans } from 'helpers/constans';

const { home, movies } = constans;

const StyledLink = styled(NavLink)`
  color: black;
  background-color: beige;
  &.active {
    color: orange;
    background-color: rgb(175, 3, 147);
  }
`;

const Navigator = () => {
  return (
    <nav className={s.nav}>
      <StyledLink to={home} className={s.home}>
        HOME
      </StyledLink>
      <StyledLink to={movies} className={s.movies}>
        MOVIES
      </StyledLink>
    </nav>
  );
};

export default Navigator;
