const config = {
  contactPageHandler: {
    templateId: 'template_contact_form',
  },
  sender: {
    enabled: import.meta.env.PROD,
    url: `${import.meta.env.BASE_URL}send.php`,
  },
  turnstile: {
    siteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim(),
  },
};

export const formStates = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export default config;
