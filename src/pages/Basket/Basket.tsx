import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Basket.scss';
import { BasketList } from '../../components/BasketList/BasketList';
import { MyContext } from '../../App';

export const Basket = () => {
  const { basket, setBasket } = useContext(MyContext);
  const sum = (a: number, b: number) => a + b;
  const totalPrice = basket.map(item => item.price - (item.price * (item.discount / 100))).reduce(sum, 0);

  return (
    <div className="basket">
      <section className="basket__header">
        <Link to="/phones" className="nav-location">
          <img className="nav-location--img" src="./img/svg/arrow-next.svg" alt="next" />
          <p className="nav-location__text--back">Back</p>
        </Link>
        <h1 className="basket__title">Cart</h1>
        {(basket.length < 1)
        ? <h2>Oops... Your Cart still empty..</h2>
      : ""}
      </section>
      <section className="basket__main">
            <ul className="basket__items">
              <BasketList />
            </ul>
            <div className="basket__total-price total-price">
              <p className="total-price__value">${totalPrice}</p>
              <p className="total-price__count">Total for {basket.length} items</p>
              <Link to="/order">
              <button onClick={() => {
                setBasket([])
              }} className="total-price__button">Checkout</button>
            </Link>
            </div>
      </section>
    </div>
  );
}
