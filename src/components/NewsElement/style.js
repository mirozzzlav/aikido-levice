import { css } from '@emotion/css';

const style = {
  newsElement: css({
    padding: '0.4rem 0',
    '> *': {
      fontWeight: 300,
    },
    '> h4': {
      padding: 0,
      margin: 0,
      fontSize: '1.1rem',
      fontWeight: 500,
    },
  }),
};

export default style;
