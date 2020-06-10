import React, { useContext } from 'react';
import './Favorites.scss';
import { Link, useLocation } from 'react-router-dom';
import { ProductList } from '../../components/ProductList/ProductList';
import { MyContext } from '../../App';

export const Favorites = () => {
  const { favorites } = useContext(MyContext);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get('query') || '';

  return (
    <>
      <section className="nav-location">
        <Link to="/" className="nav-location__svg--home">
          <img src="./img/svg/HOME.svg" alt="home" />
        </Link>
        <div className="nav-location__svg--arrow">
          <img src="./img/svg/arrow-next.svg" alt="home" />
        </div>
        <p className="nav-location__text">Favourites</p>
      </section>
      <h1 className="phones-page__title">Favourites</h1>
      <p className="phones-page__counter">
        {favorites.length}
        {' '}
        models
      </p>
      <ProductList search={query} phones={favorites} />
    </>
  );
};
