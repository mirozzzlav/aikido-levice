import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style';

export default function BurgerMenu({ routes, menuActive, setMenuActive }) {
  return (
    <nav className={style.burgerMenu(menuActive)}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        onClick={() => setMenuActive((prevActive) => !prevActive)}
      />

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

BurgerMenu.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({ route: PropTypes.string, label: PropTypes.string }),
  ).isRequired,
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
};
