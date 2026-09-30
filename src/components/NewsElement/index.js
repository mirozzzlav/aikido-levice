import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

export default function NewsElement({ label, children }) {
  return (
    <div className={style.newsElement}>
      <h4>{label}</h4>
      <div>{children}</div>
    </div>
  );
}

NewsElement.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
