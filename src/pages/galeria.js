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
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/1.jpg',
        },
        {
          src: 'https://img.youtube.com/vi/O6yMMybqBCQ/hqdefault.jpg',
          video: {
            src: 'https://www.youtube.com/embed/O6yMMybqBCQ',
          },
        },
        {
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/2.jpg',
        },
        {
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/3.jpg',
        },
        {
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/4.jpg',
        },
        {
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/5.jpg',
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
