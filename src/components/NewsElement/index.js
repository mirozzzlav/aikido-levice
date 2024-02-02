import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

export default function NewsElement({ label, children }) {
  return (
    <div className="news-element">
      <h4>{label}</h4>
      <div>{children}</div>
    </div>
  );
}

NewsElement.prototype.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
