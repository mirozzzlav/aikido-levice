import Gallery from 'src/components/Gallery';
import React from 'react';

const galeria = {
  id: 'galeria',
  route: '/galeria',
  headline: 'Galéria',
  content: (
    <Gallery
      media={[
        {
          src: 'https://aikidolevice.sk/photos/1.jpg',
          width: 853,
          height: 1280,
          srcThumb: 'https://aikidolevice.sk/photos/thumbs/1.jpg',
        },
        {
          src: 'https://img.youtube.com/vi/O6yMMybqBCQ/hqdefault.jpg',
          video: {
            src: 'https://www.youtube.com/embed/O6yMMybqBCQ',
          },
        },
        {
          src: 'https://aikidolevice.sk/photos/2.jpg',
          srcThumb: 'https://aikidolevice.sk/photos/thumbs/2.jpg',
        },
        {
          src: 'https://aikidolevice.sk/photos/3.jpg',
          srcThumb: 'https://aikidolevice.sk/photos/thumbs/3.jpg',
        },
        {
          src: 'https://aikidolevice.sk/photos/4.jpg',
          srcThumb: 'https://aikidolevice.sk/photos/thumbs/4.jpg',
        },
        {
          src: 'https://aikidolevice.sk/photos/5.jpg',
          srcThumb: 'https://aikidolevice.sk/photos/thumbs/5.jpg',
        },
        {
          src: 'https://img.youtube.com/vi/uOFCY5QgEGg/hqdefault.jpg',
          video: {
            src: 'https://www.youtube.com/embed/uOFCY5QgEGg',
          },
        },
      ]}
    />
  ),
};

export default galeria;
