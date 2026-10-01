import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Lightbox from 'yet-another-react-lightbox';
import { Thumbnails, Fullscreen } from 'yet-another-react-lightbox/plugins';

import style from 'src/components/Gallery/style';

function MediaElement({ src, video = null, onClick, fullWidth }) {
  return (
    <div
      className={style.thumbWrapper(fullWidth)}
      onClick={({ target }) => {
        if (target.tagName.toLowerCase() !== 'a') {
          return onClick();
        }
        return true;
      }}
      tabIndex={0}
      onKeyDown={() => {}}
      role="button"
    >
      {video ? (
        <div className={style.videoThumb}>
          <img src={src} alt="Video" />
        </div>
      ) : (
        <img src={src} alt="Fotka" />
      )}
    </div>
  );
}
MediaElement.propTypes = {
  src: PropTypes.string.isRequired,
  video: PropTypes.oneOfType([
    PropTypes.shape({ src: PropTypes.string }),
    PropTypes.oneOf([null]),
  ]),
  onClick: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
};

export default function Gallery({ media, vertical = false }) {
  const [index, setIndex] = useState(-1);
  const sortedMedia = [...media].sort((m1, m2) =>
    m1.orderBy && m2.orderBy
      ? m2.orderBy - m1.orderBy
      : m1.src.localeCompare(m2.src),
  );
  const singleImage = sortedMedia.length === 1;

  return (
    <>
      <div className={style.galleryWrapper(vertical)}>
        {sortedMedia.map(({ src, video, srcThumb }, currentIndex) => (
          <MediaElement
            key={src}
            src={srcThumb || src}
            video={video}
            onClick={() => setIndex(currentIndex)}
            fullWidth={vertical}
          />
        ))}
      </div>
      <Lightbox
        slides={singleImage ? sortedMedia.slice(index, index + 1) : sortedMedia}
        open={index >= 0}
        index={singleImage ? 0 : index}
        close={() => setIndex(-1)}
        plugins={singleImage ? [Fullscreen] : [Fullscreen, Thumbnails]}
        carousel={{ finite: singleImage }}
        className={style.lightBoxRoot}
        render={{
          ...(singleImage && {
            buttonPrev: () => null,
            buttonNext: () => null,
          }),
          slide: ({ slide, rect }) => {
            if (!slide.video) {
              return null;
            }
            return (
              <div
                className={style.videoIframeWrapper(rect.width / rect.height)}
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
Gallery.propTypes = {
  vertical: PropTypes.bool,
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
