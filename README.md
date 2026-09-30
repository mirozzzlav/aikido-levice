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
`hash`, `openssl` pre SMTP cez TLS a `curl` pre overenie Turnstile.
Hosting musí povoliť HTTPS spojenie na `challenges.cloudflare.com`.

Pravidlá v `.htaccess` interne nasmerujú cesty ako `/o-aikide` na `index.html`,
aby fungovalo priame otvorenie URL aj obnovenie stránky s React routovaním.
Existujúce súbory a adresáre sa obsluhujú priamo.

Apache musí mať zapnutý `mod_rewrite` a pre adresár webu povolené
`AllowOverride FileInfo` (alebo `AllowOverride All`). Ak sa `.htaccess` ignoruje,
toto nastavenie musí upraviť správca hostingu.

Po nasadení over priame otvorenie a obnovenie stránky `/o-aikide` a načítanie
existujúceho obrázka. Over tiež odoslanie kontaktného formulára. Súbor
`sitemap.xml` nie je súčasťou Vite buildu; na server sa nahráva samostatne.

## Turnstile a kontaktný formulár

V Cloudflare Turnstile vytvor widget typu **Non-interactive** a povoľ domény
`aikidolevice.sk` a `www.aikidolevice.sk`, ak používaš aj www.
Skopíruj `.env.example` do `.env` a vyplň `VITE_TURNSTILE_SITE_KEY`
(verejný site key) a `TURNSTILE_SECRET_KEY` (tajný secret key).
Typ widgetu sa nastavuje v Cloudflare, nie parametrom v JavaScripte.
Overenie prebieha automaticky bez checkboxu či klikania návštevníka.
Súbor `.env` sa necommituje ani nenahráva na hosting.

`npm run build` načíta kľúče z `.env` (prípadne `.env.production` podľa
štandardných Vite pravidiel). Bez oboch kľúčov build skončí s chybou.
Verejný kľúč sa vloží do JavaScriptu, tajný iba do vygenerovaného
`dist/contact-config.php`. Na FTP nahraj celý obsah `dist/` vrátane tohto
súboru, `turnstile.php` a `.htaccess`. Apache blokuje priamy prístup ku
konfigurácii; PHP ju načíta interne. Po zmene kľúčov sprav nový build.

Tlačidlo Odoslať je aktívne až po úspešnom overení. `send.php` overí token
cez Cloudflare Siteverify vrátane akcie `contact` a domény pred odoslaním
e-mailu. Pri chýbajúcom alebo neplatnom tokene, chybe Cloudflare či chýbajúcej
konfigurácii sa e-mail neodošle. Po každom pokuse sa overenie obnoví, pretože
token sa dá použiť iba raz.

Pri `npm run dev` je odosielanie vypnuté a Turnstile sa nenačítava.
Vite nespúšťa PHP; ani `npm run preview` nedokáže odoslať formulár, hoci
zobrazuje produkčný build. Celé odosielanie over na Apache/PHP hostingu
s reálnymi kľúčmi. Lokálny vývoj neposiela požiadavky na produkčný server.
