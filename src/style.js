import { css } from '@emotion/css';

export const breakPoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const mediaQueries = Object.fromEntries(
  Object.entries(breakPoints).map(([k, bp]) => [
    k,
    `@media (min-width: ${bp}px)`,
  ]),
);

export const menuLinkStyle = {
  '--menu-highlight': '#66897218',
  position: 'relative',
  display: 'inline-block',
  padding: '0.15em 0.55em',
  borderRadius: '0.4em',
  transition: 'background-color 180ms ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-0.85em',
    top: '50%',
    width: '0.6em',
    height: '0.45em',
    backgroundColor: 'currentColor',
    clipPath: 'polygon(0 38%, 65% 38%, 65% 0, 100% 50%, 65% 100%, 65% 62%, 0 62%)',
    opacity: 0,
    transform: 'translate(-0.25em, -50%)',
    transition: 'opacity 180ms ease, transform 180ms ease',
    pointerEvents: 'none',
  },
  '&:hover, &:focus-visible, &[aria-current="page"]': {
    backgroundColor: 'var(--menu-highlight)',
  },
  '&[aria-current="page"]': {
    '&::before': {
      opacity: 1,
      transform: 'translate(0, -50%)',
    },
  },
  '&:focus-visible': {
    outline: '2px solid currentColor',
    outlineOffset: '4px',
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&::before': {
      transition: 'none',
    },
  },
};

export const fontFaces = [
  {
    '@font-face': {
      fontFamily: 'Roboto',
      src: 'url("/fonts/Roboto/Roboto-Thin.ttf") format("truetype")',
      fontWeight: 300,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto',
      src: 'url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype")',
      fontWeight: 400,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto',
      src: 'url("/fonts/Roboto/Roboto-Medium.ttf") format("truetype")',
      fontWeight: 500,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Gloria Hallelujah',
      src: 'url("/fonts/GloriaHallelujah/GloriaHallelujah-Regular.ttf") format("truetype")',
      fontWeight: 500,
      fontStyle: 'normal',
    },
  },
];

const contentStyle = (pPaddingTop = false) => {
  let paddingTop = 0;
  if (pPaddingTop === true) {
    paddingTop = '3rem';
  }
  if (typeof pPaddingTop === 'string') {
    paddingTop = pPaddingTop;
  }
  return {
    margin: '0 auto',
    width: 'var(--content-width)',
    padding: `${paddingTop} 2rem 0 2rem`,
  };
};

export const globalStyle = {
  '*': {
    boxSizing: 'border-box',
    lineHeight: '1.5',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: '400',
    color: 'var(--color-text-default)',
  },
  ':root': {
    '--content-width': 'auto',
    '--font-size': '18px',
    '--color-text-default': '#000000',
    '--color-surface-default': '#ffffff',
    '--color-accent': '#668972',
    '--color-accent-strong': '#4f6f59',
    '--color-border-subtle': '#00000018',
    '--color-shadow-subtle': '#0000000a',
    '--color-text-on-accent': 'var(--color-surface-default)',
    '--color-mask-opaque': 'var(--color-text-default)',
    [mediaQueries.lg]: {
      '--content-width': '1080px',
    },
    fontSize: 'var(--font-size)',
  },
  body: {
    padding: '0',
    margin: '0',
    backgroundColor: 'var(--color-surface-default)',
  },
  h1: {
    fontFamily: "'Gloria Hallelujah', cursive",
    margin: '0rem 0 1rem 0',
    fontSize: '2.4rem',
    [mediaQueries.sm]: {
      fontSize: '2.8rem',
      margin: '2rem 0 2rem 0',
    },
    color: 'var(--color-accent)',
  },
  'h2, h3, h4, h5, h6': {
    color: 'var(--color-accent-strong)',
  },
  h2: {
    margin: '1.8rem 0 0.4rem 0',
    padding: '0',
    fontSize: '1.6rem',
  },
  a: {
    color: 'var(--color-accent-strong)',
    textDecoration: 'none',
  },
  p: {
    margin: 0,
    padding: 0,
  },
  infoWrapper: css({
    margin: '0rem 0 1rem 0',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }),
  info: css({
    background: 'var(--color-surface-default)',
    boxShadow: '10px 10px 10px 0px var(--color-shadow-subtle)',
    border: '1px solid var(--color-border-subtle)',
    padding: '1rem 2rem',
    borderRadius: '100px',
    '& > *, a': {
      textAlign: 'center',
      lineHeight: 'calc(1.15rem * 1.5)',
    },
    a: {
      textDecoration: 'underline',
    },
    '& > h4': {
      fontWeight: 500,
      padding: 0,
      margin: 0,
      fontSize: '1.15rem',
      color: 'var(--color-text-default)',
    },
    '& > :nth-of-type(2)': {
      minWidth: '300px',
    },
  }),
  imgsWithCaptions: css({
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    '> div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      span: {
        marginTop: '0.4rem',
      },
      img: {
        height: '250px',
        borderRadius: '8px',
      },
    },
  }),
  mainLoader: css({
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'var(--color-surface-default)',
    backgroundImage: 'url(/loader.gif)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }),
  header: {
    position: 'relative',
    zIndex: 100,
    boxShadow: '10px 10px 10px 0px var(--color-shadow-subtle)',
    backgroundColor: 'var(--color-surface-default)',
    padding: '0.8rem 0',
  },
  contentImg: css({
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '40%',
    minWidth: '250px',
    minHeight: '250px',
    maxHeight: '350px',
    maxWidth: '350px',
    objectFit: 'contain',
    alignSelf: 'center',
  }),
  floated: css({
    [mediaQueries.sm]: {
      float: 'left',
      margin: '0px 20px 0px 0px',
    },
  }),
  page: css({
    minHeight: '1px',
    display: 'flex',
    flexDirection: 'column',
    'h1, h2': {
      textAlign: 'center',
    },
    p: {
      '&::first-letter': {
        fontWeight: 600,
        fontSize: '140%',
      },
      textAlign: 'justify',
    },
  }),

  container: (active = true) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',

      header: {
        '> *': {
          ...contentStyle(),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
      section: {
        flexGrow: 1,
        ...(!active && { filter: 'blur(20px)' }),
        overflow: 'auto',
        '> *': {
          ...contentStyle(true),
          '&:first-child': {
            paddingTop: '1rem',
          },
        },
      },
      footer: {
        background: 'var(--color-accent-strong)',
        '--mask':
          'conic-gradient(from 135deg at top,transparent,var(--color-mask-opaque) 1deg 89deg,transparent 90deg) 50%/15.00px 100%;   -webkit-mask: var(--mask)',
        mask: 'var(--mask)',
        width: 'auto',
        color: 'var(--color-text-on-accent)',
        padding: '2rem',
        marginTop: '4rem',
        '> div': {
          ...contentStyle(),
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          [mediaQueries.sm]: {
            flexDirection: 'row',
          },
        },
        nav: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.22rem',
          justifyContent: 'center',
          alignItems: 'center',
          [mediaQueries.sm]: {
            gap: '2rem',
          },
          '> *': {
            width: '100%',
            [mediaQueries.sm]: {
              width: 'auto',
            },
            display: 'flex',
            justifyContent: 'center',
          },
        },
        'a.link': {
          ...menuLinkStyle,
          '--menu-highlight': '#ffffff18',
          color: 'var(--color-text-on-accent)',
          fontWeight: '500',
        },
      },
    }),
};
