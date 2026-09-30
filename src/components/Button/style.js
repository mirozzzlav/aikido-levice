import { css } from '@emotion/css';

const style = {
  formButton: (loading) =>
    css({
      ...(loading ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
      border: 0,
      padding: '0.8rem 2rem',
      borderRadius: '50px',
      fontSize: '1rem',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      '> svg': {
        width: '30px',
      },
      '&[type="submit"]': {
        backgroundColor: loading ? '#c5c5c5' : 'var(--color-accent-strong)',
      },
    }),
};
export default style;
