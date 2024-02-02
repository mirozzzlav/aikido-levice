import React from 'react';

const treningy = {
  id: 'treningy',
  route: '/treningy',
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
};
export default treningy;
