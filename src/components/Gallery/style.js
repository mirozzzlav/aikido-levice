import { css } from '@emotion/css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const style = {
  thumbWrapper: css({
    img: {
      margin: '0 !important',
      objectFit: 'cover',
      borderRadius: '8px',
      transition: 'box-shadow 0.1s linear',
      '&:hover': {
        boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.2)',
      },
    },
  }),
  mediaExtraContent: css({
    margin: '0rem 0.2rem',
    fontSize: '0.9rem',
  }),
  videoThumb: css({
    position: 'relative',
    '&:after': {
      display: 'block',
      content: '" "',
      position: 'absolute',
      top: 'calc(50% - 23px)',
      left: 'calc(50% - 23px)',
      width: '40px',
      height: '40px',
      backgroundColor: '#ffffff',
      opacity: '80%',
      borderRadius: '50%',
      backgroundImage: 'url("/play-icon.svg")',
      backgroundPositionX: '4px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      border: '6px solid #ffffff',
      pointerEvents: 'none',
    },
  }),
  lightBoxRoot: css({
    g: {
      fill: '#fff !important',
    },
  }),
  videoIframeWrapper: (long) =>
    css({
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '::before': {
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
        content: '" "',
        display: 'block',
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        background: '#fff url("/loader.gif") no-repeat center',
      },
      '> iframe': {
        border: 0,
        width: '100%',
        minWidth: '300px',
        aspectRatio: '16/9',
        ...(long
          ? { width: 'auto', height: '100%', maxHeight: '800px' }
          : null),
        position: 'relative',
      },
    }),
};

export default style;
