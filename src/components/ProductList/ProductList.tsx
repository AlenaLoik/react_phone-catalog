import React from 'react';
import './ProductList.scss';
import { IProduct } from '../../interfase/interfase';
import classnames from 'classnames';
import { Cart } from '../Cart/Cart';

type Props = {
  phones: IProduct[];
  phoneName: string;
  search: string
};

export const ProductList: React.FC<Props> = ({ search, phones, phoneName }) => (
  <ul className={search ? 'products--active' : 'products'}>
  {phones.map((phone) => (
    <li
      key={phone.name}
      className={classnames({
        'product': true,
        'product--active': phoneName === phone.name,
      })}
    >
      <Cart phone={phone} />
    </li>
  ))}
</ul>
);
