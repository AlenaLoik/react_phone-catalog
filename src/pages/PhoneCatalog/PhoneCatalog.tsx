import React from 'react';
import './PhoneCatalog.scss';
import { Link, useLocation } from 'react-router-dom';
import { IProduct } from '../../interfase/interfase';
import { ProductList } from '../../components/ProductList/ProductList';
import { Sort } from '../../components/Sort/Sort';
import { ItemOnPage } from '../../components/ItemOnPage/ItemOnPage';
import { Pagination } from '../../components/Pagination/Pagination';

type Props = {
  phones: IProduct[];
};

export const PhoneCatalog: React.FC<Props> = ({ phones }) => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get('query') || '';
  const sort: string = searchParams.get('sort') || '';
  const page: number = Number(searchParams.get('page')) || 1;
  const perPage: number = Number(searchParams.get('perPage')) || phones.length;

  const pattern = new RegExp(query, 'i');
  const start = (page - 1) * perPage;
  const pageCount = Math.ceil(phones.length / perPage);

  const visiblePhones = phones
    .filter(phone => pattern.test(phone.name))
    .sort((a: IProduct, b: IProduct): number => {
      switch (sort) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return a.age - b.age;
      }
    })
    .slice(start, start + perPage);

  if (phones.length === 0) {
    return (
      <>
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div className="phones-page">
      {query
        ? (
          <p className="phones-page__counter">
            {visiblePhones.length}
            {' '}
            {' '}
            results
          </p>
        )
        : (
          <>
            <section className="nav-location">
              <Link to="/" className="nav-location__svg--home">
                <img src="./img/svg/HOME.svg" alt="HOME" />
              </Link>
              <div className="nav-location__svg--arrow">
                <img src="./img/svg/arrow-next.svg" alt="next" />
              </div>
              <p className="nav-location__text">Phones</p>
            </section>
            <h1 className="phones-page__title">Mobile phones</h1>
            <p className="phones-page__counter">
              {phones.length}
              {' '}
              {' '}
              models
            </p>
            <section className="phones-page__sorting">
              <Sort />
              <ItemOnPage countItems={phones.length} />
            </section>
          </>
        )}
      <ProductList search={query} phones={visiblePhones} />
      {query
        ? ''
        : <Pagination pageCount={pageCount} />}
    </div>
  );
};
