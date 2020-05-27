import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Basket.scss';
import { MyContext } from '../../App';
import { BasketList } from '../../components/BasketList/BasketList';

export const Basket = () => {
  const {basket} = useContext(MyContext);

  return (
    <div className="basket">
      <Link to="/phones">
        <p className="nav-location__text--back">Back</p>
      </Link>
      <h1 className="basket__title">Cart</h1>
      <ul className="basket__items">
        {basket.map(item => (
          <BasketList item={item} key={item.id}/>
        ))}
      </ul>
      <div className="basket__total-price"> </div>
    </div>
  );
}
