import React from 'react';
import './ProductListSlider.scss';
import { IProduct } from '../../interfase/interfase';
import { Cart } from '../Cart/Cart';

type Props = {
  items: IProduct[];
};

export const ProductListSlider: React.FC<Props> = ({ items }) => (
  <ul className="product-list-slider__items">
  {items.map((item) => (
    <li
      key={item.name}
      className="product-list-slider__item"
    >
      <Cart phone={item} />
    </li>
  ))}
</ul>
);
