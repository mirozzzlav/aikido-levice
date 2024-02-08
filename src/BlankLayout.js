import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fontFaces, globalStyle as style } from 'src/style';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import Logo from 'src/components/Logo';
import { LoaderContext } from 'src/LoaderProvider';

export default function BlankLayout({ children }) {
  const { setForceReload } = useContext(LoaderContext);
  useEffect(() => setForceReload, []);

  return (
    <div className={style.blankContainer}>
      <Global styles={[style, ...fontFaces]} />
      <header>
        <div>
          <Logo />
          <Link to="/">&#x293A;&nbsp;Späť</Link>
        </div>
      </header>
      <section>{children}</section>
    </div>
  );
}

BlankLayout.prototype.propTypes = {
  children: PropTypes.node.isRequired,
};
