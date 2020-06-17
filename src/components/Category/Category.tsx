import React from 'react';
import './Category.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  countAccessories: number;
  countPhones: number;
  countTablets: number;
};

export const Category: React.FC<Props> = ({ countAccessories, countPhones, countTablets }) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);

  };

  return (
    <section className="categorys">
      <h1 className="categorys__title">Shop by category</h1>
      <div className="categorys__container">
        <span className="category">
          <NavLink to="/phones" onClick={scrollTop}>
            <div className="category__img category__img--1" />
            <h3 className="category__title">Mobile phones</h3>
          </NavLink>
          <p className="phones-page__counter">
            {countPhones}
            {' '}
            {' '}
            models
          </p>
        </span>
        <span className="category">
          <NavLink to="/tablets" onClick={scrollTop}>
            <div className="category__img category__img--2" />
            <h3 className="category__title">Tablets</h3>
          </NavLink>
          <p className="phones-page__counter">
            {countTablets}
            {' '}
            {' '}
            models
          </p>
        </span>
        <span className="category">
          <NavLink to="/accessories" onClick={scrollTop}>
            <div className="category__img category__img--3" />
            <h3 className="category__title">Accessories</h3>
          </NavLink>
          <p className="phones-page__counter">
            {countAccessories}
            {' '}
            {' '}
            models
          </p>
        </span>
      </div>
    </section>
  );
};
