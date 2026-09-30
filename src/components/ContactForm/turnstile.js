let scriptPromise;

export default function loadTurnstile() {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      if (window.turnstile) {
        resolve(window.turnstile);
        return;
      }

      const script = document.createElement('script');
      script.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.onload = () => {
        // The async script has finished executing; ready() rejects async/defer.
        if (!window.turnstile) {
          script.remove();
          reject(new Error('Turnstile API nie je dostupné.'));
          return;
        }
        resolve(window.turnstile);
      };
      script.onerror = () => {
        script.remove();
        reject(new Error('Turnstile sa nepodarilo načítať.'));
      };
      document.head.appendChild(script);
    }).catch((error) => {
      scriptPromise = undefined;
      throw error;
    });
  }

  return scriptPromise;
}
