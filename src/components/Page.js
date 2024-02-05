import React, { useContext, useEffect, useRef } from 'react';
import { cx } from '@emotion/css';
import PropTypes from 'prop-types';
import { WindowContext } from 'src/WindowProvider';
import { globalStyle as style } from 'src/style';

export default function Page({ headline, content, active }) {
  const ref = useRef(null);
  const { pageLoaded } = useContext(WindowContext);

  useEffect(() => {
    if (!active || !pageLoaded) {
      return;
    }
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [active, pageLoaded]);

  if (!content) {
    return <div ref={ref} className={style.page} />;
  }

  return (
    <div className={cx(style.page, style.pageWithContent)} ref={ref}>
      <h1>{headline}</h1>
      {content}
    </div>
  );
}

Page.defaultProps = {
  headline: null,
  content: null,
};

Page.prototype.propTypes = {
  headline: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([null])]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([null])]),
  active: PropTypes.bool.isRequired,
};
