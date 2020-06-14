import React, { useState } from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const [checked, setChecked] = useState(false);

  return(<>
    <nav className="nav header__nav">
      <label htmlFor="toggle">
        <div id="menuToggle">
          <input
          id="toggle"
          type="checkbox"
          checked={checked}
          onClick={() => {
            checked ? setChecked(false) : setChecked(true)}
          }/>
          <span />
          <span />
          <span />
          <ul id="menu" className="nav__list">
            <li className="nav__item">
              <NavLink to="/"
              exact className="nav__link"
              activeClassName="nav__link--active"
              onClick={() => setChecked(false)}>
                home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/phones"
              className="nav__link"
              activeClassName="nav__link--active"
              onClick={() => setChecked(false)}>
                phones
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/tablets"
              className="nav__link"
              activeClassName="nav__link--active"
              onClick={() => setChecked(false)}>
                tablets
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/accessories"
              className="nav__link"
              activeClassName="nav__link--active"
              onClick={() => setChecked(false)}>
                accessories
              </NavLink>
            </li>
          </ul>
        </div>
      </label>
    </nav>
  </>
);}
