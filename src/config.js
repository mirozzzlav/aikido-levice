const config = {
  contactPageHandler: {
    templateId: 'template_contact_form',
  },
  mailSend: {
    url: 'https://api.emailjs.com/api/v1.0/email/send',
    serviceId: 'service_4xfc74g',
    publicKey: 'SeoE35BedqrB4LK-w',
  },
};

export const formStates = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export default config;
