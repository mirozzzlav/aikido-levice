import { globalStyle as style } from 'src/style';
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import Page from 'src/components/Page';
import BurgerMenu from 'src/components/BurgerMenu';
import Layout from 'src/Layout';
import Logo from 'src/components/Logo';

function Links({ className, routes }) {
  return (
    <nav className={className}>
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
};

Links.prototype.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  routes: PropTypes.arrayOf(
    PropTypes.shape({ route: PropTypes.string, label: PropTypes.string }),
  ).isRequired,
};

export default function PagesLayout({ pages }) {
  const { pathname } = useLocation();
  const [menuActive, setMenuActive] = useState(false);
  // const { pageLoaded } = useContext(LoaderContext);

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
    <Layout
      header={
        <BurgerMenu
          routes={menuRoutes}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      }
      body={
        <>
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
        </>
      }
      footer={
        <>
          <Logo width="4rem" height="4rem" color="#fff" />
          <Links routes={menuRoutes} />
        </>
      }
      active={!menuActive}
    />
  );
}

PagesLayout.prototype.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      headline: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
};
