import React from 'react';
import './Search.scss';
import { useHistory, useLocation } from 'react-router-dom';

export const Search = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get('query') || '';

  const clearSearch = () => {
    history.push({
      search: '?query=',
    });
  };

  return (
    <div className="search">
      <input
        placeholder="Search in phones..."
        className="search__input"
        type="text"
        value={query}
        onChange={(event) => {
          history.push({
            search: `?query=${event.target.value}`,
          });
        }}
      />
      {query
        ? <button onClick={clearSearch} className="search__img search__img--remuve">+</button>
        : (
          <div className="search__img">
            <img src="./img/svg/search.svg" alt="search" />
          </div>
        )}
    </div>
  );
};
