import React from 'react';
import './Sort.scss';
import { useHistory, useLocation } from 'react-router-dom';

export const Sort = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search)
  const sort: string = searchParams.get('sort') || "age";

  return (
    <label className="select-for-sort">
      <span className="select-for-sort__text">Sort by</span>
      <img className="select-for-sort__svg rotate" src="./img/svg/arrow-next.svg" alt="next" />
      <select className="select-for-sort__option" value={sort}
        onInput={(event) => {
          const target = event.target as HTMLTextAreaElement;
          searchParams.set('sort', target.value)
          history.push({
            search: searchParams.toString()
          });
        }}>
        <option value="age">Newest</option>
        <option value="name">A-Z</option>
        <option value="price">Price</option>
      </select>
    </label>
  );
}
