import Gallery from 'src/components/Gallery';
import React from 'react';
import NewsElement from 'src/components/NewsElement';
import { Link } from 'react-router-dom';

const galeria = {
  id: 'novinky',
  route: '/novinky',
  headline: 'Novinky',
  content: (
    <Gallery
      vertical={true}
      media={[
        {
          src: 'https://aikidolevice.sk/photos/novinky/1.jpg?rand=123',
          srcThumb: 'https://aikidolevice.sk/photos/novinky/thumbs/1.jpg',
          orderBy: new Date('2025-01-01'),
          extraContent: (
            <NewsElement label="Nábor 2025">
              Vydajte sa na jedinečnú cestu do sveta aikido. Objavte svoje nové
              schopnosti. Verte v seba. Príďte si po vlastnú skúsenosť. Radi Vás
              privítame v každom z našich{' '}
              <Link to="https://aikikai.sk/dojo/" target="_blank">
                22 klubov
              </Link>
              . Na Slovensku, Morave aj v Čechách. Kontaktovať naše levické Dojo{' '}
              <Link to="/kontakt">môžete tu.</Link>
            </NewsElement>
          ),
        },
      ]}
    />
  ),
};

export default galeria;
