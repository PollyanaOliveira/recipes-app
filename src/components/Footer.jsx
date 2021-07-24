import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import colors from '../Styles/colors';

const style = {
  display: 'flex',
  width: '100vw',
  flex: 1,
  justifyContent: 'space-around',
  backgroundColor: colors.cor1,
};

function Footer() {
  return (
    <footer data-testid="footer" style={ style }>
      <Link to="/bebidas">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drink-icon"
        />
      </Link>
      <Link to="/explorar">
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="explore-icon"
        />
      </Link>
      <Link to="/comidas">
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="food-icon"
        />
      </Link>
    </footer>
  );
}

export default Footer;
