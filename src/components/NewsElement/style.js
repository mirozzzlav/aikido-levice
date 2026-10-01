import { css } from '@emotion/css';
import { mediaQueries } from 'src/style';

const style = {
  newsElement: css({
    display: 'flex',
    textAlign: 'justify',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '3rem',
    [mediaQueries.xs]: {
      flexDirection: 'row',
    },
    '> div:last-child': {
      flex: 1,
    },
    h4: {
      padding: 0,
      margin: 0,
      fontSize: '1.3rem',
      color: 'var(--color-accent-strong)',
    },
  }),
};

export default style;
