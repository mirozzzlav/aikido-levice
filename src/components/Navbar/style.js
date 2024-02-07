import { css } from '@emotion/css';
import { mediaQueries } from 'src/style';

const style = {
  navbarTop: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    width: 'var(--content-width)',
    padding: '0 2rem',
    zIndex: 100,
    position: 'relative',
  }),
  navbar: (active) =>
    css({
      button: {
        height: '40px',
        width: '40px',
        border: 0,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: !active
          ? 'url(/burger.svg)'
          : 'url(/burger-closed.svg)',
      },

      '[aria-description="menuItems"]': {
        ...(!active && { transform: 'translateY(-200%)' }),
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingTop: '140px',
        [mediaQueries.sm]: {
          paddingTop: '200px',
          alignItems: 'flex-start',
        },
        '> *': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          margin: '0 auto',
          gap: '1rem',
        },
        a: {
          display: 'block',
          color: '#000',
          textDecoration: 'none',
          fontSize: '2rem',
          fontFamily: "'Gloria Hallelujah', cursive",
          textAlign: 'center',
          '&:hover': {
            color: '#668972 !important',
          },
        },
      },
    }),
};

export default style;
