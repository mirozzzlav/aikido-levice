import React from 'react';
import { globalStyle as style } from 'src/style';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';

const page = {
  id: 'o-aikide',
  route: '/o-aikide',
  headline: 'O bojovom umení Aikido',
  menuLabel: 'O Aikide',
  content: (
    <div>
      <img
        className={cx(style.contentImg, style.floated)}
        src="/ueshiba.svg"
        alt="Morihei Ueshiba"
      />
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
        ohľadu na vek, pohlavie a povolanie. Uplynulo 60 rokov od začiatku
        šírenia Aikida v zahraničí. Počas tejto doby sa Aikido udomácnilo v 140
        krajinách. Aikido sa udomácnilo po celom svete, pretože sa uznáva ako
        spôsob trénovania tela a mysle a jeho hodnota prekonáva rasové a
        hraničné rozdiely. V dôsledku aktivít na propagáciu v zahraničí bola v
        roku 1976 založená Medzinárodná federácia Aikida (IAF), na ktorej sa
        konala každé štyri roky valná hromada federácie. V roku 1984 sa
        Medzinárodná federácia Aikida oficiálne stala členom Všeobecnej
        asociácie medzinárodných športových federácií (GAISF). Viac o Aikide sa
        môžete dozvedieť aj&nbsp;v&nbsp;
        <Link to="/rozhovor-robo">rozhovore</Link>&nbsp;s Róberom Patayom -
        trénerom Aikido Dojo Levice.
      </p>
    </div>
  ),
};

export default page;
