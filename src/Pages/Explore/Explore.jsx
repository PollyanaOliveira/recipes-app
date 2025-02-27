import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';

function Explore() {
  return (
    <>
      <Header title="Explorar" searchBtn={ false } />
      <Link to="/explorar/comidas">
        <button
          data-testid="explore-food"
          type="button"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          data-testid="explore-drinks"
          type="button"
        >
          Explorar Bebidas
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default Explore;
