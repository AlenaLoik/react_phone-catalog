import React from 'react';
import './ProductList.scss';
import { IProduct } from '../../interfase/interfase';
import { Card } from '../Card/Card';

type Props = {
  phones: IProduct[];
  search: string;
};

export const ProductList: React.FC<Props> = ({ search, phones }) => (
  <ul className={search ? 'products--active' : 'products'}>
    {phones.map((phone) => (
      <li key={phone.name} className="product">
        <Card item={phone} />
      </li>
    ))}
  </ul>
);
