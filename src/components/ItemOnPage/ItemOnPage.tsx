import React, { useState } from 'react';
import './ItemOnPage.scss';
import { useHistory, useLocation } from 'react-router-dom';

const options = ["all", "4", "8", "16"];

type Props = {
  countItems: number;
};

export const ItemOnPage: React.FC<Props> = ({ countItems }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const perPage: number = Number(searchParams.get('perPage')) || countItems;

  return (
    <div className="dropdown">
    <p className="dropdown__heading">Items on page</p>
    <div className="dropdown__wrapper item-on-page">
      <button
        type="button"
        className="dropdown__header  item-on-page"
        onClick={() => setIsListOpen(true)}
      >
        {perPage}
        <span className={!isListOpen ?
        "dropdown__arrow "
        : "dropdown__arrow dropdown__arrow--up"}
        />
      </button>
      <ul className={!isListOpen ?
        'dropdown__list' :
        'dropdown__list dropdown__list--is-open'
      }
      >
        {options.map( option => (
          <li key={option}>
            <a
              href="#!"
              className={(isListOpen) ?
                'dropdown__list-item' :
                'dropdown__list-item dropdown__list-item--active'
              }
              onClick={(e) => {
                e.preventDefault();
                setIsListOpen(false);
                searchParams.set('perPage', option);
                history.push({
                  search: searchParams.toString(),
                });
              }}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};
