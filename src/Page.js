import { globalStyle } from 'src/style';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { cx } from '@emotion/css';
import { NavLink, useLocation } from 'react-router-dom';
import Index from 'src/components/Navbar';
import Logo from 'src/components/Logo';

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

export function PagePart({ headline, content, active }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [active]);

  if (!content) {
    return <div ref={ref} className="page-part" />;
  }

  return (
    <div className={cx('page-part', 'page-part-with-content')} ref={ref}>
      <h1>{headline}</h1>
      {content}
    </div>
  );
}

PagePart.defaultProps = {
  headline: null,
  content: null,
};

PagePart.prototype.propTypes = {
  headline: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([null])]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([null])]),
  active: PropTypes.bool.isRequired,
};

export default function Page({ pageParts }) {
  const { pathname } = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  const currentPagePartId = useMemo(() => pathname.substring(1), [pathname]);
  const routes = useMemo(
    () =>
      pageParts
        .filter(({ id }) => id !== 'home')
        .map(({ headline, menuLabel, id }) => ({
          label: menuLabel || headline,
          route: `/${id}`,
        })),
    [pageParts],
  );

  useEffect(() => setMenuActive(false), [pathname]);

  return (
    <>
      <Global styles={globalStyle} />
      <header>
        <Index
          routes={routes}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      </header>

      <section className={`main-section${menuActive ? ' menu-active' : ''}`}>
        <PagePart key="home" active={currentPagePartId === ''} />
        <img
          className="content-img"
          src="/ueshiba.svg"
          alt="Morihei Ueshiba"
          style={{ marginTop: '4rem' }}
        />

        <div className="content">
          {pageParts.map(
            ({ id, headline, content, cols }) =>
              id !== 'home' && (
                <PagePart
                  key={`${id}`}
                  headline={headline}
                  content={content}
                  active={currentPagePartId === id}
                  cols={!!cols}
                />
              ),
          )}
        </div>
      </section>
      <footer>
        <Links
          routes={routes}
          leftComponent={<Logo width="4rem" height="4rem" color="#fff" />}
        />
      </footer>
    </>
  );
}

Page.prototype.propTypes = {
  pageParts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      headline: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
};
