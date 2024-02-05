import React from 'react';
import { globalStyle as style } from 'src/style';

const page = {
  id: 'o-aikide',
  route: '/o-aikide',
  headline: 'O bojovom umení Aikido',
  menuLabel: 'O Aikide',
  content: (
    <>
      <p>
        Aikido je japonské bojové umenie vytvorené v 20. rokoch 20. storočia
        Moriheiom Ueshibou (1883-1969), ktorý dosiahol najvyššiu úroveň
        ovládania klasických japonských bojových umení. Aikido pracuje s
        energiou útočníka, ktorú následne využíva proti nemu samotnému. V
        technikách pracuje s kruhovými, špirálovými pohybmi a bodmi nestability,
        ktoré umožňujú kontrolovať útočníka. Výsledkom techniky sú hody a
        znehybnenia teda páky.. Aikido nemá súťažný charakter. Cieľom tréningu
        Aikida nie je dokonalosť kroku alebo zručnosti, ale skôr zlepšenie
        charakteru podľa pravidiel prírody. Tréning Aikida má za cieľ podporiť
        fyzický a mentálny rozvoj, v súlade s úrovňou zručností každého
        jednotlivca, a opakovaným cvičením tak, aby mohol cvičiť ktokoľvek.
        Tréning Aikida je prospešný nielen pre zdravie, ale aj pre prirodzený
        vývoj sebavedomia v každodennom živote. Dódžó je ideálne miesto na
        prehĺbenie porozumenia ľudskému pohľadu a stretávanie sa s ľuďmi bez
        ohľadu na vek, pohlavie a povolanie.
      </p>
      <img
        alt="Aikido"
        src="/aiki.svg"
        className={style.contentImg}
        style={{
          filter: 'saturate(0)',
          marginTop: 0,
          marginBottom: '4rem',
          width: '100%',
        }}
      />
      <p>
        Uplynulo 60 rokov od začiatku šírenia Aikida v zahraničí. Počas tejto
        doby sa Aikido udomácnilo v 140 krajinách. Aikido sa udomácnilo po celom
        svete, pretože sa uznáva ako spôsob trénovania tela a mysle a jeho
        hodnota prekonáva rasové a hraničné rozdiely. V dôsledku aktivít na
        propagáciu v zahraničí bola v roku 1976 založená Medzinárodná federácia
        Aikida (IAF), na ktorej sa konala každé štyri roky valná hromada
        federácie. V roku 1984 sa Medzinárodná federácia Aikida oficiálne stala
        členom Všeobecnej asociácie medzinárodných športových federácií (GAISF).
      </p>
    </>
  ),
};

export default page;
