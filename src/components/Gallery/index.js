import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { Thumbnails, Fullscreen } from 'yet-another-react-lightbox/plugins';

import { cx, css } from '@emotion/css';
import { breakPoints } from 'src/style';
import style from 'src/components/Gallery/style';
import config from 'src/config';

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

export default function Gallery({ media: mediaFromProps }) {
  const [index, setIndex] = useState(-1);
  const [media, setMedia] = useState([]);
  useEffect(
    () =>
      mediaFromProps.forEach(async ({ src, video, extraContent }) => {
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
              extraContent,
            },
          ];
        });
      }),
    [mediaFromProps],
  );

  return (
    <>
      <PhotoAlbum
        spacing={parseInt(config.gallery.spacing, 10)}
        photos={media}
        layout="masonry"
        columns={(containerWidth) =>
          containerWidth > breakPoints.xs ? Math.floor(containerWidth / 200) : 2
        }
        onClick={({ index: indexToBeSet }) => setIndex(indexToBeSet)}
        renderPhoto={({
          wrapperStyle,
          renderDefaultPhoto,
          photo: { video, src },
        }) => {
          const { extraContent } = Object.values(media).find(
            ({ src: currentSrc }) => src === currentSrc,
          );
          return (
            <div
              className={cx(
                style.thumbWrapper,
                css({ marginBottom: config.gallery.spacing }),
              )}
            >
              {video ? (
                <div className={cx(css(wrapperStyle), style.videoThumb)}>
                  {renderDefaultPhoto({ wrapped: true })}
                </div>
              ) : (
                renderDefaultPhoto()
              )}
              {extraContent ? (
                <div className={style.mediaExtraContent}>{extraContent}</div>
              ) : null}
            </div>
          );
        }}
      />

      <Lightbox
        slides={media}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
        className={style.lightBoxRoot}
        render={{
          slide: ({ slide, rect }) => {
            if (!slide.video) {
              return null;
            }
            return (
              <div
                className={style.videoIframeWrapper(
                  rect.width / rect.height > 16 / 9,
                )}
              >
                <iframe
                  src={`${slide.video.src}`}
                  title={slide.title}
                  allow="accelerometer"
                  allowFullScreen
                />
              </div>
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
