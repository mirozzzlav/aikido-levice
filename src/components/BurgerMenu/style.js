import { css } from '@emotion/css';
import { mediaQueries } from 'src/style';

const style = {
  burgerMenu: (active) =>
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
        zIndex: -1,
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
          color: 'var(--color-accent-strong)',
          textDecoration: 'none',
          fontSize: '2rem',
          fontFamily: "'Gloria Hallelujah', cursive",
          textAlign: 'center',
        },
      },
    }),
};

export default style;
