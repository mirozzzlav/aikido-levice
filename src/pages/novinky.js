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
      vertical
      media={[
        {
          src: 'https://aikidolevice.sk/photos/novinky/2.jpg?rand=789',
          srcThumb: 'https://aikidolevice.sk/photos/novinky/thumbs/2.jpg',
          orderBy: new Date('2025-11-03'),
          extraContent: (
            <NewsElement label="Pomôžme Slovenskej Aikido Asociácii získať vlastné TATAMI">
              Aikidó je viac než len bojové umenie – je to cesta harmónie,
              rešpektu a vzájomného porozumenia. Slovenská Aikido Asociácia
              združuje ľudí všetkých vekových kategórií, ktorí sa spoločne učia
              disciplíne, sústredeniu a schopnosti riešiť konflikty bez násilia.
              Už viac ako 30. rokov tieto hodnoty udržiavame a šírime. Aby sme
              ich mohli naďalej odovzdávať a poskytovať bezpečné prostredie pre
              tréning, potrebujeme kvalitné tatami – špeciálne žinenky, ktoré
              chránia zdravie cvičencov pri pádoch a technikách. Pomôžte nám ich
              získať v potrebnom počte na&nbsp;
              <Link to="https://donio.sk/tatami-pre-saa" target="_blank">
                https://donio.sk/tatami-pre-saa
              </Link>
              .
            </NewsElement>
          ),
        },
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
