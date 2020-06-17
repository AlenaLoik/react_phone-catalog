import React from 'react';
import './Header.scss';
import { Route, NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';

type Props = {
  favoritesCount: number;
  basketCount: number;
};

export const Header: React.FC<Props> = ({ favoritesCount, basketCount }) => {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <Nav />
        <Route path="/phones">
          <Search />
        </Route>
        <Route path="/tablets">
          <Search />
        </Route>
        <Route path="/favorites">
          <Search />
        </Route>
      </div>
      <div className="header__action">
        <NavLink
          to="/favorites"
          className="header__link__favorits"
          activeClassName="header__link__favorits--active"
        >
          {(favoritesCount > 0)
            ? <div className="header__action__counter">{favoritesCount}</div>
            : ''}
          <img src="./img/svg/heart-1.svg" alt="heart" />
        </NavLink>
        <NavLink
          to="/basket"
          className="header__link__basket"
          activeClassName="header__link__basket--active"
        >
          {(basketCount > 0)
            ? <div className="header__action__counter">{basketCount}</div>
            : ''}
          <img src="./img/svg/cart.svg" alt="cart" />
        </NavLink>
      </div>
    </header>
  );
};
