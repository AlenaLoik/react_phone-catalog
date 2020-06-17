import React from 'react';
import './Sort.scss';
import { useHistory, useLocation } from 'react-router-dom';

const options = ["age", "name", "price"];

type Props = {
  isListSortOpen: boolean;
  setIsListSortOpen: (value: boolean) => void;
}

export const Sort: React.FC<Props> = ({ isListSortOpen, setIsListSortOpen }) => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sort: string = searchParams.get('sort') || 'age';

  const dropdownControler = () => {
    (isListSortOpen)
      ? setIsListSortOpen(false)
      : setIsListSortOpen(true)
  }

  return (
    <div className="dropdown item-on-page">
      <p className="dropdown__heading">Sort by</p>
      <div className="dropdown__wrapper">
        <button
          type="button"
          className="dropdown__header"
          onClick={dropdownControler}
        >
          {sort}
          <span className={!isListSortOpen ?
            "dropdown__arrow "
            : "dropdown__arrow dropdown__arrow--up"}
          />
        </button>
        <ul className={!isListSortOpen ?
          'dropdown__list' :
          'dropdown__list dropdown__list--is-open'
        }
        >
          {options.map(option => (
            <li key={option}>
              <a
                href="#!"
                className={(isListSortOpen) ?
                  'dropdown__list-item' :
                  'dropdown__list-item dropdown__list-item--active'
                }
                onClick={(e) => {
                  e.preventDefault();
                  setIsListSortOpen(false);
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
