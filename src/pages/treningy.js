import React from 'react';
import { globalStyle as style } from 'src/style';

const treningy = {
  id: 'treningy',
  route: '/treningy',
  headline: 'Tréningy',
  content: (
    <>
      <div className={style.infoColsWrapper}>
        <div className={style.infoCols}>
          <h4>Cvičíme na adrese</h4>
          <div>
            <a
              href="https://maps.app.goo.gl/Pe8WDGCFSLyf6a2b7"
              target="_blank"
              rel="noreferrer"
            >
              Materská škola - Hlboká 3, Levice
            </a>
          </div>
        </div>
        <div className={style.infoCols}>
          <h4>Dospelí</h4>
          <div>V utorok a vo štvrtok od 18:00 do 20:00</div>
        </div>

        <div className={style.infoCols}>
          <h4>Deti</h4>
          <div>V utorok a vo štvrtok od 18:00 do 19:15</div>
        </div>
      </div>
      <h2>Naši tréneri</h2>
      <div className={style.imgsWithCaptions}>
        <div>
          <img
            src="https://aikidolevice.sk/photos/treneri/robo.jpg"
            alt="Róbert Patay"
          />
          <span>Róbert Patay</span>
        </div>
        <div>
          <img
            src="https://aikidolevice.sk/photos/treneri/filip.jpg"
            alt="Filip Kaszanyoczki"
          />
          <span>Filip Kaszanyoczki</span>
        </div>
      </div>
    </>
  ),
};
export default treningy;
