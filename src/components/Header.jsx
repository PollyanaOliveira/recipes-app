import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchIcon from '../images/searchIcon.svg';
import ProfileImage from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import colors from '../Styles/colors';

const style = {
  display: 'flex',
  fontFamily: 'MedievalSharp, Cursive',
  color: colors.cor3,
  backgroundColor: colors.cor1,
  alignItems: 'center',
  justifyContent: 'center',
};

function Header({ title, searchBtn = true }) {
  const [displaySearch, setDisplaySearch] = useState(false);
  const history = useHistory();
  return (
    <>
      <header style={ style }>
        <button
          type="button"
          onClick={ () => history.push('./perfil') }
          data-testid="profile-top-btn"
          src={ ProfileImage }
        >
          <img src={ ProfileImage } alt="perfil" />
        </button>

        <span data-testid="page-title">{title}</span>
        {searchBtn
          && (
            <button
              type="button"
              onClick={ () => setDisplaySearch(!displaySearch) }
              data-testid="search-top-btn"
              src={ SearchIcon }
            >
              <img src={ SearchIcon } alt="pesquisar" />
            </button>
          )}
      </header>
      {displaySearch ? <SearchBar /> : null}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchBtn: PropTypes.bool.isRequired,
};

export default Header;
