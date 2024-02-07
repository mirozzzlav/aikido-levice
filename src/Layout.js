import { fontFaces, globalStyle as style } from 'src/style';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from 'src/components/Logo';
import Navbar from 'src/components/Navbar';
import Page from 'src/components/Page';
import { WindowContext } from 'src/WindowProvider';

function Links({ className, routes, leftComponent }) {
  return (
    <nav className={className}>
      <div>{leftComponent}</div>
      {routes.map(({ route, label }) => (
        <div key={`${route}`}>
          <NavLink className="link" to={`${route}`}>
            {`${label}`}
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

Links.defaultProps = {
  className: null,
  leftComponent: null,
};

Links.prototype.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  leftComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([null])]),
  routes: PropTypes.arrayOf(
    PropTypes.shape({ route: PropTypes.string, label: PropTypes.string }),
  ).isRequired,
};

export default function Layout({ pages }) {
  const { pathname } = useLocation();
  const [menuActive, setMenuActive] = useState(false);
  const { pageLoaded } = useContext(WindowContext);

  const currentPageId = useMemo(
    () => pathname.substring(1) || 'home',
    [pathname],
  );
  const menuRoutes = useMemo(
    () =>
      pages
        .filter(({ id }) => id !== 'home')
        .map(({ headline, menuLabel, route }) => ({
          label: menuLabel || headline,
          route,
        })),
    [pages],
  );

  useEffect(() => setMenuActive(false), [pathname]);

  return (
    <div className={style.container}>
      <Global styles={[style, ...fontFaces]} />
      {!pageLoaded ? <div className={style.mainLoader} /> : null}
      <header>
        <Navbar
          routes={menuRoutes}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      </header>
      <section className={style.mainSection(menuActive)}>
        <Page
          key="home"
          active={currentPageId === 'home'}
          content={
            <img
              className={style.contentImg}
              src="/ueshiba.svg"
              alt="Morihei Ueshiba"
            />
          }
        />

        {pages.map(
          ({ id, headline, content, cols }) =>
            id !== 'home' && (
              <Page
                key={`${id}`}
                headline={headline}
                content={content}
                active={currentPageId === id}
                cols={!!cols}
              />
            ),
        )}
        <footer>
          <Links
            routes={menuRoutes}
            leftComponent={<Logo width="4rem" height="4rem" color="#fff" />}
          />
        </footer>
      </section>
    </div>
  );
}

Layout.prototype.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      headline: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
};
