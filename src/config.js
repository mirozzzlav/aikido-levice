const config = {
  contactPageHandler: {
    templateId: 'template_contact_form',
  },
  sender: {
    url:
      window.location.hostname === 'localhost' ? '/api/send.php' : '/send.php',
  },
};

export const formStates = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export default config;
