import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Lightbox from 'yet-another-react-lightbox';
import { Thumbnails, Fullscreen } from 'yet-another-react-lightbox/plugins';

import style from 'src/components/Gallery/style';

function MediaElement({ src, video, extraContent, onClick }) {
  return (
    <div
      className={style.thumbWrapper}
      onClick={onClick}
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
      {extraContent}
    </div>
  );
}
MediaElement.defaultProps = {
  video: null,
  extraContent: null,
};

MediaElement.prototype.propTypes = {
  src: PropTypes.string.isRequired,
  video: PropTypes.oneOfType([
    PropTypes.shape({ src: PropTypes.string }),
    PropTypes.oneOf([null]),
  ]),
  extraContent: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([null])]),
  onClick: PropTypes.func.isRequired,
};

export default function Gallery({ media }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className={style.galleryWrapper}>
        {media
          .sort((m1, m2) =>
            m1.orderBy && m2.orderBy
              ? m1.orderBy - m2.orderBy
              : m1.src.localeCompare(m2.src),
          )
          .map(({ src, video, extraContent, srcThumb }, currentIndex) => (
            <MediaElement
              key={src}
              extraContent={extraContent}
              src={srcThumb || src}
              video={video}
              onClick={() => setIndex(currentIndex)}
            />
          ))}
      </div>
      <Lightbox
        slides={media.sort((m1, m2) =>
          m1.orderBy && m2.orderBy
            ? m1.orderBy - m2.orderBy
            : m1.src.localeCompare(m2.src),
        )}
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
