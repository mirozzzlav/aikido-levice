import Gallery from 'src/components/Gallery';
import React from 'react';
import NewsElement from 'src/components/NewsElement';

const galeria = {
  id: 'novinky',
  route: '/novinky',
  headline: 'Novinky',
  content: (
    <Gallery
      media={[
        {
          src: 'https://aikidolevice.sk/photos/novinky/1.jpg?rand=123',
          srcThumb: 'https://aikidolevice.sk/photos/novinky/thumbs/1.jpg',
          orderBy: new Date('2024-09-01'),
          extraContent: (
            <NewsElement label="1.9.2024">
              Príjmame nových členov
            </NewsElement>
          ),
        },
      ]}
    />
  ),
};

export default galeria;
