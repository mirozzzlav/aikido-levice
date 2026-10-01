import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'src/components/Gallery';
import style from './style';

export default function NewsElement({ label, image, children }) {
  return (
    <article className={style.newsElement}>
      <Gallery media={[image]} />
      <div>
        <h4>{label}</h4>
        <div>{children}</div>
      </div>
    </article>
  );
}

NewsElement.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcThumb: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
