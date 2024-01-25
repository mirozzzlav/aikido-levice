export const breakPoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

const mediaQueries = Object.fromEntries(
  Object.entries(breakPoints).map(([k, bp]) => [
    k,
    `@media (min-width: ${bp}px)`,
  ]),
);

export const globalStyle = {
  '@import':
    'url("https://fonts.googleapis.com/css2?family=Mynerve&family=Open+Sans:ital,wght@0,300,0,400,0,500,1,600&display=swap")',
  '*': {
    boxSizing: 'border-box',
    lineHeight: '1.5',
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: '400',
    color: '#000',
  },
  ':root': {
    '--content-width': 'auto',
    '--font-size': '16px',
    [mediaQueries.md]: {
      '--font-size': '18px',
    },
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
    fontFamily: "'Mynerve', cursive",
    margin: '0rem 0 2rem 0',
    fontSize: '2.8rem',
    color: '#668972',
  },
  h2: {
    margin: '1.8rem 0 0.4rem 0',
    padding: '0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
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
  '.info-cols': {
    margin: '0.2rem auto',
    display: 'flex',
    flexWrap: 'wrap',
    width: '300px',
    justifyContent: 'center',
    '& > *': {
      textAlign: 'center',
    },
    [mediaQueries.sm]: {
      width: 'auto',
      '& > *': {
        textAlign: 'left',
      },
    },
    '& > :nth-of-type(1)': {
      width: '10rem',
      fontWeight: 'bold',
    },
    '& > :nth-of-type(2)': {
      width: '20rem',
    },
  },
  '.imgs-with-captions': {
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
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      img: {
        height: '250px',
        borderRadius: '8px',
      },
    },
  },
  header: {
    position: 'sticky',
    zIndex: 100,
    top: 0,
    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.05)',
    backgroundColor: '#ffffff',
    padding: '0.8rem 0',
  },
  '.content-img': {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '80%',
    maxHeight: '600px',
    maxWidth: '600px',
    objectFit: 'contain',
    alignSelf: 'center',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '.main-section': {
    '&.menu-active': {
      filter: 'blur(20px)',
    },
  },
  footer: {
    background: '#9abea6',
    '--mask':
      'conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) 50%/15.00px 100%;   -webkit-mask: var(--mask)',
    mask: 'var(--mask)',
    color: '#fff',
    padding: '2rem',
    marginTop: '4rem',
    display: 'flex',
    justifyContent: 'center',
    '> nav': {
      marginTop: '15px',
      display: 'flex',
      gap: '1.2rem',
      [mediaQueries.sm]: {
        gap: '3rem',
      },
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      '> *': {
        width: '300px',
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

  '.content': {
    maxWidth: 'var(--content-width)',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 2rem',
  },
  '.page-part': {
    scrollMarginTop: '150px',
    minHeight: '1px',
    display: 'flex',
    flexDirection: 'column',
  },
  '.page-part-with-content': {
    textAlign: 'justify',
    [mediaQueries.sm]: {
      textAlign: 'left',
    },
    margin: '2rem 0 4rem 0',
    'h1, h2': {
      textAlign: 'center',
    },
    p: {
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
};
