import React from 'react';
import './Pagination.scss';
import { useHistory, useLocation } from 'react-router-dom';

type Props = {
  pageCount: number;
};


export const Pagination: React.FC<Props> = ({ pageCount }) => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const page: number = Number(searchParams.get('page')) || 1;

  const handleChangePage = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLTextAreaElement;

    searchParams.set('page', target.value);
    history.push({
      search: searchParams.toString(),
    });
  };

  const handleChangePageArrow = (event: React.MouseEvent<HTMLElement>) => {
   const target = event.target as HTMLTextAreaElement;
   console.log(page)

    searchParams.set('page', `${Number(target.value) + page}`);
    history.push({
      search: searchParams.toString(),
    });
  };

  return (
    <section className="pagination">
      <button
        onClick={handleChangePageArrow}
        value={-1}
        disabled={page < 2}
        className={(page < 2)
          ? 'pagination__button pagination__button--left disabled'
          : 'pagination__button pagination__button--left'}
      >
        <img className="pagination__button--img" src="./img/svg/arrow-next.svg" alt="next" />
      </button>
      {Array(pageCount).fill('button').map((item, index) => (
        <input
          onClick={handleChangePage}
          type={item}
          className={((index + 1) === page)
            ? 'pagination__button pagination__button--page active'
            : 'pagination__button pagination__button--page'}
          value={index + 1}
        />
      ))}
      <button
        disabled={page > (pageCount - 1)}
        value={1}
        onClick={handleChangePageArrow}
        className={(page > (pageCount - 1))
          ? 'pagination__button pagination__button--right disabled'
          : 'pagination__button pagination__button--right'}
      >
        <img className="pagination__button--img" src="./img/svg/arrow-next.svg" alt="next" />
      </button>
    </section>
  );
};
