import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <>
    <nav className="nav header__nav">
      <label htmlFor="toggle">
        <div id="menuToggle">
          <input id="toggle" type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu" className="nav__list">
            <li className="nav__item">
              <NavLink to="/" exact className="nav__link" activeClassName="nav__link--active">
                home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/phones" className="nav__link" activeClassName="nav__link--active">
                phones
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/tablets" className="nav__link" activeClassName="nav__link--active">
                tablets
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/accessories" className="nav__link" activeClassName="nav__link--active">
                accessories
              </NavLink>
            </li>
          </ul>
        </div>
      </label>
    </nav>
  </>
);
