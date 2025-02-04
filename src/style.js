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
    color: '#000',
  },
  ':root': {
    '--content-width': 'auto',
    '--font-size': '18px',
    // [mediaQueries.md]: {
    //   '--font-size': '18px',
    // },
    [mediaQueries.lg]: {
      '--content-width': '1080px',
    },
    fontSize: 'var(--font-size)',
  },
  body: {
    padding: '0',
    margin: '0',
    backgroundColor: '#fff',
  },
  h1: {
    fontFamily: "'Gloria Hallelujah', cursive",
    margin: '0rem 0 1rem 0',
    fontSize: '2.4rem',
    [mediaQueries.sm]: {
      fontSize: '2.8rem',
      margin: '0rem 0 2rem 0',
    },
    color: '#668972',
  },
  h2: {
    margin: '1.8rem 0 0.4rem 0',
    padding: '0',
    fontSize: '1.6rem',
  },
  a: {
    color: '#668972',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'none',
    },
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
    background: '#fff',
    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.03)',
    border: '1px solid #00000018',
    padding: '1rem 2rem',
    borderRadius: '100px',
    '& > *, a': {
      textAlign: 'center',
      fontWeight: 300,
      flexGrow: 1,
      lineHeight: 'calc(1.15rem * 1.5)',
      '& a': { color: '#000', textDecoration: 'underline' },
    },
    'a:hover': {
      textDecoration: 'underline',
    },
    '& > h4': {
      fontWeight: 400,
      padding: 0,
      margin: 0,
      fontSize: '1.15rem',
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
    background: '#fff',
    backgroundImage: 'url(/loader.gif)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }),
  header: {
    position: 'relative',
    zIndex: 100,
    top: 0,
    left: 0,
    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.05)',
    backgroundColor: '#ffffff',
    padding: '0.8rem 0',
  },
  contentImg: css({
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '40%',
    minWidth: '250px',
    minHeight: '250px',
    maxHeight: '550px',
    maxWidth: '550px',
    objectFit: 'contain',
    alignSelf: 'center',
    '&:last-child': {
      marginBottom: 0,
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
      textAlign: 'justify',
      [mediaQueries.sm]: {
        textAlign: 'left',
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
  }),

  pagesContainer: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'hidden',
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
          '&:first-child': {
            ...contentStyle('1rem'),
          },
          ...contentStyle(true),
        },
      },
      footer: {
        background: '#9abea6',
        '--mask':
          'conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) 50%/15.00px 100%;   -webkit-mask: var(--mask)',
        mask: 'var(--mask)',
        width: 'auto',
        color: '#fff',
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
          color: 'rgb(245, 249, 246)',
          fontWeight: '500',
          paddingBottom: '2px',
          borderBottom: '2px solid transparent',
        },
        'a.link:hover, a.link.active': {
          borderBottom: '2px solid rgb(245, 249, 246)',
        },
      },
    }),
};
