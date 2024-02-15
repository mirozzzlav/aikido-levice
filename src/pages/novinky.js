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
          orderBy: new Date('2024-04-06'),
          extraContent: (
            <NewsElement label="6.4.2024">
              Seminár aikido pre&nbsp;deti
              <br />
              Holíč (SK)
            </NewsElement>
          ),
        },
        {
          src: 'https://aikidolevice.sk/photos/novinky/2.jpg',
          srcThumb: 'https://aikidolevice.sk/photos/novinky/thumbs/2.jpg',
          orderBy: new Date('2024-04-20'),
          extraContent: (
            <NewsElement label="20. - 21.4.2024">
              Asociačný seminár
              <br />
              Třebíč (CZ)
            </NewsElement>
          ),
        },
        {
          src: 'https://aikidolevice.sk/photos/novinky/3.jpg',
          srcThumb: 'https://aikidolevice.sk/photos/novinky/thumbs/3.jpg',
          orderBy: new Date('2024-06-07'),
          extraContent: (
            <NewsElement label="7. - 9.6.2024">
              30. Výročie SAA
              <br />
              Trnava (SK)
            </NewsElement>
          ),
        },

        {
          src: 'https://img.youtube.com/vi/ACUvGEqU90g/hqdefault.jpg',
          video: {
            src: 'https://www.youtube.com/embed/ACUvGEqU90g',
          },
          orderBy: new Date('2023-03-16'),
          extraContent: (
            <NewsElement label="16. 3. 2024">
              Seminár SAA
              <br />
              Ružomberok (SK)
            </NewsElement>
          ),
        },
      ]}
    />
  ),
};

export default galeria;
