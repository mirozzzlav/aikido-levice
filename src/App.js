import React from 'react';
import Page from 'src/Page';
import {
  BrowserRouter,
  Route as ReactRoute,
  Routes as RoutesReactDom,
} from 'react-router-dom';
import Index from 'src/components/Gallery';

const pageParts = [
  { id: 'home' },
  {
    id: 'o-aikide',
    headline: 'O bojovom umení Aikido',
    menuLabel: 'O Aikide',
    content: (
      <>
        <p>
          Aikido je japonské bojové umenie vytvorené v 20. rokoch 20. storočia
          Moriheiom Ueshibou (1883-1969), ktorý dosiahol najvyššiu úroveň
          ovládania klasických japonských bojových umení. Aikido pracuje s
          energiou útočníka, ktorú následne využíva proti nemu samotnému. V
          technikách pracuje s kruhovými, špirálovými pohybmi a bodmi
          nestability, ktoré umožňujú kontrolovať útočníka. Výsledkom techniky
          sú hody a znehybnenia teda páky.. Aikido nemá súťažný charakter.
          Cieľom tréningu Aikida nie je dokonalosť kroku alebo zručnosti, ale
          skôr zlepšenie charakteru podľa pravidiel prírody. Tréning Aikida má
          za cieľ podporiť fyzický a mentálny rozvoj, v súlade s úrovňou
          zručností každého jednotlivca, a opakovaným cvičením tak, aby mohol
          cvičiť ktokoľvek. Tréning Aikida je prospešný nielen pre zdravie, ale
          aj pre prirodzený vývoj sebavedomia v každodennom živote. Dódžó je
          ideálne miesto na prehĺbenie porozumenia ľudskému pohľadu a
          stretávanie sa s ľuďmi bez ohľadu na vek, pohlavie a povolanie.
        </p>
        <img
          alt="Aikido"
          src="src/assets/aiki.svg"
          className="content-img"
          style={{
            filter: 'saturate(0)',
            marginTop: 0,
            marginBottom: '4rem',
          }}
        />
        <p>
          Uplynulo 60 rokov od začiatku šírenia Aikida v zahraničí. Počas tejto
          doby sa Aikido udomácnilo v 140 krajinách. Aikido sa udomácnilo po
          celom svete, pretože sa uznáva ako spôsob trénovania tela a mysle a
          jeho hodnota prekonáva rasové a hraničné rozdiely. V dôsledku aktivít
          na propagáciu v zahraničí bola v roku 1976 založená Medzinárodná
          federácia Aikida (IAF), na ktorej sa konala každé štyri roky valná
          hromada federácie. V roku 1984 sa Medzinárodná federácia Aikida
          oficiálne stala členom Všeobecnej asociácie medzinárodných športových
          federácií (GAISF).
        </p>
      </>
    ),
  },
  // {
  //   id: 'novinky',
  //   headline: 'Novinky',
  //   content: (
  //     <p>
  //       It is a long-established fact that a reader will be distracted by the
  //       readable content of a page when looking at its layout. The point of
  //       using Lorem Ipsum is that it has a more-or-less normal distribution of
  //       letters, as opposed to using Content here, content here, making it look
  //       like readable English. Many desktop publishing packages and web page
  //       editors now use Lorem Ipsum as their default model text, and a search
  //       for lorem ipsum will uncover many web-sites still in their infancy.
  //       Various versions have evolved over the years, sometimes by accident,
  //       sometimes on purpose (injected humour and the like). It is established
  //       fact that a reader will be distracted by the readable content of a page
  //       when looking at its layout. The point of using Lorem Ipsum is that it
  //       has a more-or-less normal distribution of letters, as opposed tousing{' '}
  //       <a href="/">This is a link</a>
  //     </p>
  //   ),
  // },
  {
    id: 'galeria',
    headline: 'Galéria',
    content: (
      <Index
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
  },
  {
    id: 'treningy',
    headline: 'Tréningy',
    content: (
      <>
        <div className="info-cols">
          <span>Cvičíme na adrese</span>
          <span>Materská škola - Hlboká 3, Levice</span>
        </div>
        <div className="info-cols">
          <div>Dospelí</div>
          <div>V utorok a vo štvrtok od 18:00 do 20:00</div>
        </div>

        <div className="info-cols">
          <div>Deti</div>
          <div>V utorok a vo štvrtok od 18:00 do 19:15</div>
        </div>
        <h2>Naši tréneri</h2>
        <div className="imgs-with-captions">
          <div>
            <img
              src="https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/treneri/robo.jpg"
              alt="Róbert Patay"
            />
            <span>Róbert Patay</span>
          </div>
          <div>
            <img
              src="https://keoyhgevedbrvbysulic.supabase.co/storage/v1/object/public/photos/treneri/filip.jpg"
              alt="Filip Kaszanyoczki"
            />
            <span>Filip Kaszanyoczki</span>
          </div>
        </div>
      </>
    ),
  },
  // {
  //   id: 'kontakt',
  //   headline: 'Kontakt',
  //   content: (
  //     <p>
  //       It is a long established fact that a reader will be distracted by the
  //       readable content of a page when looking at its layout. The point of
  //       using Lorem Ipsum is that it has a more-or-less normal distribution of
  //       letters, as opposed to using Content here, content here, making it look
  //       like readable English.
  //     </p>
  //   ),
  // },
];

function App() {
  const page = <Page pageParts={pageParts} />;

  return (
    <BrowserRouter>
      <RoutesReactDom>
        {pageParts.map(({ id }) => (
          <ReactRoute
            key={id}
            element={page}
            path={`/${id !== 'home' ? id : ''}`}
          />
        ))}
      </RoutesReactDom>
    </BrowserRouter>
  );
}

export default App;
