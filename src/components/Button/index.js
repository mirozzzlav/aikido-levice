import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

export function LoaderSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeDasharray="246.32537109375 10.263557128906257"
        d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="2s"
          keyTimes="0;1"
          values="0;256.58892822265625"
        />
      </path>
    </svg>
  );
}

export default function Button({ type, label, onClick, loading }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={style.formButton(loading)}
    >
      {label}
      {loading === true ? <LoaderSvg /> : null}
    </button>
  );
}

Button.defaultProps = {
  type: 'submit',
  loading: null,
};
Button.prototype.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]),
};
