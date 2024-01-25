import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import { Thumbnails, Fullscreen } from 'yet-another-react-lightbox/plugins';

import 'src/components/Gallery/style.css';
import { css, cx } from '@emotion/css';

function getImageDimensions(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = function () {
      resolve({ width: img.width, height: img.height });
    };

    img.onerror = function () {
      reject(new Error('Error loading the image. Please check the URL.'));
    };
  });
}

const style = {
  iframe: css({
    width: '80%',
    height: `${0.75 * 80}%`,
    minWidth: '300px',
    objectFit: 'contain',
  }),
};
export default function Gallery({ media: mediaFromProps }) {
  const [index, setIndex] = useState(-1);
  const [media, setMedia] = useState([]);
  useEffect(
    () =>
      mediaFromProps.forEach(async ({ src, video }) => {
        const { width, height } = await getImageDimensions(src);
        setMedia((prevMedia) => {
          if (prevMedia.find(({ src: prevSrc }) => prevSrc === src)) {
            return prevMedia;
          }
          return [
            ...prevMedia,
            {
              src,
              width,
              height,
              video,
            },
          ];
        });
      }),
    [mediaFromProps],
  );

  return (
    <>
      <PhotoAlbum
        photos={media}
        layout="masonry"
        targetRowHeight={150}
        onClick={({ index: indexToBeSet }) => setIndex(indexToBeSet)}
        renderPhoto={({
          wrapperStyle,
          renderDefaultPhoto,
          photo: { video },
        }) => (
          <div className={cx(css(wrapperStyle), video ? 'video-thumb' : null)}>
            {renderDefaultPhoto({ wrapped: true })}
          </div>
        )}
      />

      <Lightbox
        slides={media}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
        render={{
          slide: ({ slide, rect }) => {
            if (!slide.video) {
              return null;
            }
            const w = Math.max(300, Math.round(0.75 * rect.width));
            return (
              <iframe
                className={style.iframe}
                // width={w}
                // height={Math.round(0.75 * w)}
                src={`${slide.video.src}`}
                title={slide.title}
                frameBorder="0"
                allow="accelerometer;"
                allowFullScreen
              />
            );
          },
        }}
      />
    </>
  );
}

Gallery.prototype.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      video: PropTypes.oneOfType([
        PropTypes.shape({ src: PropTypes.string, type: PropTypes.string }),
        PropTypes.oneOf([undefined]),
      ]),
    }),
  ).isRequired,
};
