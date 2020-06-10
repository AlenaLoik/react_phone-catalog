import React from 'react';
import { Link } from 'react-router-dom';
import './OrderPage.scss';

export const OrderPage = () => {
  return (
    <div className="basket">
      <section className="basket__header">
        <Link to="/phones" className="nav-location">
          <img className="nav-location--img" src="./img/svg/arrow-next.svg" alt="next" />
          <p className="nav-location__text--back">Back</p>
        </Link>
      </section>
      <section className="order">
        <h1> Thank you for your order! </h1>
        <Link to="/phones" className="order__link-button">
          <input
            className="item__button--add"
            type="button"
            value="Continue shopping..."
          />
        </Link>
      </section>
    </div>
  );
};
