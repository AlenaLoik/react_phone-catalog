import React from 'react';
import './BasketList.scss';
import { IProduct } from '../../interfase/interfase';

type Props = {
  item: IProduct;
}

export const BasketList: React.FC<Props> = ({ item }) => {
const {imageUrl, name, price, discount} = item;
const priceWithDiscount = `$${price - (price * (discount / 100))}`;

  return (
    <div className="container">
      <button>x</button>
      <img src={imageUrl} alt="phone"/>
      <p>{name}</p>
      <section>
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </section>
      <p>{priceWithDiscount}</p>
    </div>
  );
}
