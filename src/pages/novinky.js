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
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/novinky/1.jpg',
          extraContent: (
            <NewsElement label="6.4.2023">
              Seminár aikido pre deti
              <br />
              Holíč (SK)
            </NewsElement>
          ),
        },
        {
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/novinky/2.jpg',
          extraContent: (
            <NewsElement label="20. - 21.4.2024">
              Asociačný seminár
              <br />
              Třebíč (CZ)
            </NewsElement>
          ),
        },
        {
          src: 'https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/novinky/3.jpg',
          extraContent: (
            <NewsElement label="7. - 9.6.2024">
              30. Výročie SAA
              <br />
              Trnava (SK)
            </NewsElement>
          ),
        },
      ]}
    />
  ),
};

export default galeria;
