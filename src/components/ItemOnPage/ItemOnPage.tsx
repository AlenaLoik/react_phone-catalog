import React from 'react';
import './ItemOnPage.scss';
import { useHistory, useLocation } from 'react-router-dom';

type Props = {
  countItems: number;
};

export const ItemOnPage: React.FC<Props> = ({ countItems }) => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const perPage: number = Number(searchParams.get('perPage')) || countItems;

  return (
    <label className="select-for-page">
      <span className="select-for-page__text">Items on page</span>
      <img className="select-for-page__svg" src="./img/svg/arrow-next.svg" alt="next" />
      <select
        className="select-for-page__option"
        value={perPage}
        onInput={(event) => {
          const target = event.target as HTMLTextAreaElement;

          searchParams.set('perPage', target.value);
          history.push({
            search: searchParams.toString(),
          });
        }}
      >
        <option value={countItems}>all</option>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
      </select>
    </label>
  );
};
