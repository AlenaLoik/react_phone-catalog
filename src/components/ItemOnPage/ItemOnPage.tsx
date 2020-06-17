import React from 'react';
import './ItemOnPage.scss';
import { useHistory, useLocation } from 'react-router-dom';

const options = ["all", "4", "8", "16"];

type Props = {
  countItems: number;
  isListPageOpen: boolean;
  setIsListPageOpen: (value: boolean) => void;
};

export const ItemOnPage: React.FC<Props> = ({ isListPageOpen, countItems, setIsListPageOpen }) => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const perPage: number = Number(searchParams.get('perPage')) || countItems;

  const dropdownControler = () => {
    (isListPageOpen)
      ? setIsListPageOpen(false)
      : setIsListPageOpen(true)
  }

  return (
    <div className="dropdown">
      <p className="dropdown__heading">Items on page</p>
      <div className="dropdown__wrapper item-on-page">
        <button
          type="button"
          className="dropdown__header  item-on-page"
          onClick={dropdownControler}
        >
          {perPage}
          <span className={!isListPageOpen ?
            "dropdown__arrow "
            : "dropdown__arrow dropdown__arrow--up"}
          />
        </button>
        <ul className={!isListPageOpen ?
          'dropdown__list' :
          'dropdown__list dropdown__list--is-open'
        }
        >
          {options.map(option => (
            <li key={option}>
              <a
                href="#!"
                className={(isListPageOpen) ?
                  'dropdown__list-item' :
                  'dropdown__list-item dropdown__list-item--active'
                }
                onClick={(e) => {
                  e.preventDefault();
                  setIsListPageOpen(false);
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
