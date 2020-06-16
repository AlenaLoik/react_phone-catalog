import React, { useState } from 'react';
import './Sort.scss';
import { useHistory, useLocation } from 'react-router-dom';

const options = ["age", "name", "price"];

export const Sort = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const sort: string = searchParams.get('sort') || 'age';

  return (
    <div className="dropdown item-on-page">
      <p className="dropdown__heading">Sort by</p>
      <div className="dropdown__wrapper">
        <button
          type="button"
          className="dropdown__header"
          onClick={() => setIsListOpen(true)}
        >
          {sort}
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
                  searchParams.set('sort', option);
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
