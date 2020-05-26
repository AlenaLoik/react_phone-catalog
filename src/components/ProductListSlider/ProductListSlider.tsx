import React from 'react';
import './ProductListSlider.scss';
import { IProduct } from '../../interfase/interfase';
import { Cart } from '../Cart/Cart';

type Props = {
  items: IProduct[];
  left: number;
};

export const ProductListSlider: React.FC<Props> = ({ items, left }) => (
  <ul className="product-list-slider__items" style={{ margin: `0 0 0 ${left}px` }}>
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
