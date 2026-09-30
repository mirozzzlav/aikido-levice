# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deploying to Apache

Run `npm run build` and upload the contents of `dist/` to the website's root
directory. Also upload the hidden `dist/.htaccess` file next to `index.html`.
Vite copies it from `public/.htaccess` during every build.

Photos are stored in `public/photos/`. Vite automatically copies them, including
their subdirectories, to `dist/photos/`, so they are uploaded along with the
rest of the contents of `dist/`. Their URLs remain `/photos/...`.

The contact form is handled by `public/send.php`, which is also automatically
copied to `dist/send.php`. The required PHPMailer 7.1.1 files are stored in
`public/phpmailer/`, and the build automatically includes them in
`dist/phpmailer/`. Upload both `send.php` and the `phpmailer/` directory next to
it via FTP; uploading the entire contents of `dist/` is sufficient. The script
no longer requires `vendor/autoload.php` or Composer on the server. The hosting
environment must have PHP enabled with the `ctype`, `filter`, `hash`, and
`openssl` extensions for SMTP over TLS, as well as `curl` for Turnstile
verification. The hosting provider must allow HTTPS connections to
`challenges.cloudflare.com`.

The rules in `.htaccess` internally route paths such as `/o-aikide` to
`index.html`, allowing direct URL access and page refreshes to work with React
routing. Existing files and directories are served directly.

Apache must have `mod_rewrite` enabled and `AllowOverride FileInfo` (or
`AllowOverride All`) permitted for the website directory. If `.htaccess` is
ignored, the hosting administrator must update this setting.

After deployment, verify that `/o-aikide` can be opened directly and refreshed,
and that an existing image loads. Also verify that the contact form can be
submitted. The `sitemap.xml` file is not part of the Vite build and must be
uploaded to the server separately.

## Turnstile and the contact form

In Cloudflare Turnstile, create a **Non-interactive** widget and allow the
`aikidolevice.sk` and `www.aikidolevice.sk` domains if you also use the www
version. Copy `.env.example` to `.env` and set `VITE_TURNSTILE_SITE_KEY` (the
public site key) and `TURNSTILE_SECRET_KEY` (the private secret key). The widget
type is configured in Cloudflare, not through a JavaScript parameter.
Verification runs automatically, without a checkbox or any action from the
visitor. Do not commit the `.env` file or upload it to the hosting server.

`npm run build` loads the keys from `.env` (or `.env.production`, following
standard Vite rules). The build fails if either key is missing. The public key
is embedded in the JavaScript, while the secret key is written only to the
generated `dist/contact-config.php`. Upload the entire contents of `dist/` via
FTP, including this file, `turnstile.php`, and `.htaccess`. Apache blocks direct
access to the configuration file; PHP loads it internally. Create a new build
after changing the keys.

The Submit button is enabled only after successful verification. Before sending
an email, `send.php` validates the token through Cloudflare Siteverify,
including the `contact` action and the domain. No email is sent if the token is
missing or invalid, Cloudflare returns an error, or the configuration is
missing. Verification resets after every attempt because each token can be used
only once.

When running `npm run dev`, form submission is disabled and Turnstile is not
loaded. Vite does not run PHP; `npm run preview` cannot submit the form either,
even though it displays the production build. Test the entire submission flow
on Apache/PHP hosting with real keys. Local development does not send requests
to the production server.
