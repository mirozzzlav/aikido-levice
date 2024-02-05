import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from 'src/components/Logo';
import style from './style';

export default function Navbar({ routes, menuActive, setMenuActive }) {
  return (
    <nav className={style.navbar(menuActive)}>
      <div className={style.navbarTop}>
        <Logo />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          onClick={() => setMenuActive((prevActive) => !prevActive)}
        />
      </div>
      <div
        aria-description="menuItems"
        aria-hidden="true"
        onClick={(e) => {
          if (e.target.tagName !== 'a') {
            setMenuActive(false);
          }
        }}
      >
        <div>
          {routes.map(({ route, label }) => (
            <NavLink key={`${route}`} to={`${route}`}>{`${label}`}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({ route: PropTypes.string, label: PropTypes.string }),
  ).isRequired,
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
};
