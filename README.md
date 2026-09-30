# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Nasadenie na Apache

Spusti `npm run build` a nahraj obsah `dist/` do koreňového adresára webu.
Nahraj aj skrytý súbor `dist/.htaccess` vedľa `index.html`. Vite ho kopíruje
z `public/.htaccess` pri každom builde.

Fotografie sú v `public/photos/`. Vite ich automaticky skopíruje vrátane
podadresárov do `dist/photos/`, takže sa nahrajú spolu s ostatným obsahom
`dist/`. Ich URL zostávajú `/photos/...`.

Kontaktný formulár obsluhuje `public/send.php`, ktorý sa tiež automaticky
skopíruje do `dist/send.php`. Potrebné súbory PHPMailer 7.1.1 sú v
`public/phpmailer/` a build ich automaticky zahrnie do `dist/phpmailer/`.
Na FTP nahraj `send.php` aj adresár `phpmailer/` vedľa neho; stačí nahrať celý
obsah `dist/`. Skript už nevyžaduje `vendor/autoload.php` ani Composer na
serveri. Na hostingu musí byť zapnuté PHP s rozšíreniami `ctype`, `filter`,
`hash` a `openssl` pre SMTP cez TLS. Vite lokálne PHP nespúšťa; formulár na
localhoste používa proxy `/api/send.php` na produkčný server.

Pravidlá v `.htaccess` interne nasmerujú cesty ako `/o-aikide` na `index.html`,
aby fungovalo priame otvorenie URL aj obnovenie stránky s React routovaním.
Existujúce súbory a adresáre sa obsluhujú priamo.

Apache musí mať zapnutý `mod_rewrite` a pre adresár webu povolené
`AllowOverride FileInfo` (alebo `AllowOverride All`). Ak sa `.htaccess` ignoruje,
toto nastavenie musí upraviť správca hostingu.

Po nasadení over priame otvorenie a obnovenie stránky `/o-aikide` a načítanie
existujúceho obrázka. Over tiež odoslanie kontaktného formulára. Súbor
`sitemap.xml` nie je súčasťou Vite buildu; na server sa nahráva samostatne.
