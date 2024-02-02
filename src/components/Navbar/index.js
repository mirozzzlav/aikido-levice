import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from 'src/components/Logo';

export default function Navbar({ routes, menuActive, setMenuActive }) {
  return (
    <nav className={`navbar${menuActive ? ' active' : ''}`}>
      <div className="navbar-top">
        <Logo />

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className="hamburger"
          type="button"
          onClick={() => setMenuActive((prevActive) => !prevActive)}
        />
      </div>
      <div
        className="menu-items"
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
