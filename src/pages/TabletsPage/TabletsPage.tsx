import React, { useState, useEffect } from 'react';
import './TabletsPage.scss';

import { Link, useLocation } from 'react-router-dom';
import { IProduct } from '../../interfase/interfase';
import { ProductList } from '../../components/ProductList/ProductList';
import { Sort } from '../../components/Sort/Sort';
import { ItemOnPage } from '../../components/ItemOnPage/ItemOnPage';
import { Pagination } from '../../components/Pagination/Pagination';

type Props = {
  tablets: IProduct[];
};

export const TabletsPage: React.FC<Props> = ({ tablets }) => {
  const location = useLocation();
  const [isListPageOpen, setIsListPageOpen] = useState(false);
  const [isListSortOpen, setIsListSortOpen] = useState(false);

  useEffect(() => {
    if (isListSortOpen && isListPageOpen) {
      setIsListPageOpen(false);
    }
  }, [isListSortOpen]);

  useEffect(() => {
    if (isListPageOpen && isListSortOpen) {
      setIsListSortOpen(false);
    }

  }, [isListPageOpen]);

  const searchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get('query') || '';
  const sort: string = searchParams.get('sort') || '';
  const page: number = Number(searchParams.get('page')) || 1;
  const perPage: number = Number(searchParams.get('perPage')) || tablets.length;

  const pattern = new RegExp(query, 'i');
  const start = (page - 1) * perPage;
  const pageCount = Math.ceil(tablets.length / perPage);

  const visibleTablets = tablets
    .filter(tablet => pattern.test(tablet.name))
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

  if (tablets.length === 0) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="phones-page">
      {query
        ? (
          <p className="phones-page__counter">
            {visibleTablets.length}
            {' '}
            {' '}
            results
          </p>
        )
        : (
          <>
            <section className="nav-location">
              <Link to="/" className="nav-location__svg--home">
                <img src="./img/svg/Home.svg" alt="HOME" />
              </Link>
              <div className="nav-location__svg--arrow">
                <img src="./img/svg/arrow-next.svg" alt="next" />
              </div>
              <p className="nav-location__text">Tablets</p>
            </section>
            <h1 className="phones-page__title">Tablets</h1>
            <p className="phones-page__counter">
              {tablets.length}
              {' '}
              {' '}
              models
            </p>
            <section className="phones-page__sorting">
              <Sort isListSortOpen={isListSortOpen} setIsListSortOpen={setIsListSortOpen} />
              <ItemOnPage isListPageOpen={isListPageOpen} setIsListPageOpen={setIsListPageOpen} countItems={tablets.length} />
            </section>
          </>
        )}
      <ProductList search={query} phones={visibleTablets} />
      {query
        ? ''
        : <Pagination pageCount={pageCount} />}
    </div>
  );
};
