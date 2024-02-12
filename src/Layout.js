import React, { useContext, useEffect } from 'react';
import { fontFaces, globalStyle as style } from 'src/style';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import Logo from 'src/components/Logo';
import { LoaderContext } from 'src/LoaderProvider';

export default function Layout({ header, body, footer, active }) {
  const { setForceReload } = useContext(LoaderContext);
  const { pageLoaded } = useContext(LoaderContext);
  useEffect(() => setForceReload, []);

  return (
    <div className={style.container(active)}>
      <Global styles={[style, ...fontFaces]} />
      {!pageLoaded ? <div className={style.mainLoader} /> : null}
      <header>
        <div>
          <Logo />
          {header}
        </div>
      </header>
      <section>
        {body}
        <footer>
          <div>{footer}</div>
        </footer>
      </section>
    </div>
  );
}
Layout.defaultProps = {
  footer: null,
  active: true,
};
Layout.prototype.propTypes = {
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  footer: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.oneOf([null]),
  ]),
  active: PropTypes.bool,
};
