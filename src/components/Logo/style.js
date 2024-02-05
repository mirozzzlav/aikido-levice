import { css } from '@emotion/css';

const style = {
  logo: css({
    flexGrow: 0,

    '> *': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      display: 'block',
    },
  }),
};

export default style;
