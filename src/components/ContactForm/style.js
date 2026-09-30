import { css } from '@emotion/css';
import { formStates } from 'src/config';

const style = {
  '::placeholder': {
    color: 'rgba(0,0,0,0.8)',
    opacity: 1,
    fontWeight: 300,
  },
  inputGroup: (error) =>
    css({
      margin: '2rem 0',
      display: 'flex',
      flexDirection: 'column',
      '[aria-roledescription="input-state"]': {
        padding: '0.4rem 0rem 0rem 1rem',
        color: '#b50606',
        fontSize: '0.9rem',
        opacity: error ? 1 : 0,
      },
      'input, textarea': {
        fontWeight: 300,
        background: '#fff',
        boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.03)',
        border: '1px solid #00000018',
        fontSize: '1rem',
        outline: 'none',
        ':focus-visible': {
          ...(!error && { borderColor: 'rgba(0,0,0,0.6)' }),
        },
      },
      input: {
        padding: '0 2rem',
        height: '3rem',
        borderRadius: '100px',
      },
      textArea: {
        borderRadius: '20px',
        minHeight: '300px',
        padding: '1rem 2rem',
        resize: 'none',
      },
    }),
  formInfo: css({
    strong: {
      fontWeight: 500,
    },
  }),
  formResult: (state) =>
    css({
      padding: '2rem',
      borderRadius: '20px',
      margin: '2rem 0',
      ...(state === formStates.initial || state === formStates.loading
        ? { display: 'none' }
        : null),
      ...(state === formStates.success
        ? {
            background: '#9abea61f',
            color: '#668972',
          }
        : null),
      ...(state === formStates.error
        ? {
            background: '#b506062b',
            color: '#b50606',
          }
        : null),
    }),
  button: css({
    cursor: 'pointer',
    border: 0,
    borderRadius: '50px',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    background: 'var(--color-accent-strong)',
    color: '#fff',
  }),
};

export default style;
