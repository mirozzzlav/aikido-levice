import React, { useCallback, useState } from 'react';
import './style.css';
import config from 'src/config';
import Button from 'src/components/Button';

export async function sendContactFormMail(fromMail, message) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return fetch(config.mailSend.url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      service_id: config.mailSend.serviceId,
      user_id: config.mailSend.publicKey,
      template_id: config.contactPageHandler.templateId,
      template_params: {
        fromMail,
        message,
      },
    }),
  })
    .then((resp) => resp)
    .catch((error) => error);
}

const formStates = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

const errorMessages = {
  empty: 'Pole je prázdne.',
  invalid: (suffix) => `Nesprávny tvar ${suffix}.`,
};

export default function ContactForm() {
  const [inputs, setInputs] = useState(null);
  const [inputErrors, setInputErrors] = useState(null);
  const [formState, setFormState] = useState('initial');

  const validateInputs = useCallback(() => {
    let errors = null;

    if (!inputs?.mail) {
      errors = {
        mail: errorMessages.empty,
      };
    }
    if (
      !errors &&
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputs.mail)
    ) {
      errors = { mail: errorMessages.invalid('e-mailu') };
    }

    if (!inputs?.message) {
      errors = errors
        ? { ...errors, message: errorMessages.empty }
        : { message: errorMessages.empty };
    }

    return errors;
  }, [inputs]);

  const onSubmit = useCallback(async () => {
    const errors = validateInputs();
    setInputErrors(errors);
    if (!errors) {
      setFormState(formStates.loading);
      const resp = await sendContactFormMail(inputs.mail, inputs.message);
      // sendMail function call
      if (resp.ok) {
        setFormState(formStates.success);
        setInputs(null);
        setInputErrors(null);
      } else {
        setFormState(formStates.error);
      }
    } else {
      setFormState(formStates.error);
    }
  }, [validateInputs]);

  return (
    <div className="contact-form">
      <div className="form-info">
        Chcete nám niečo napísať, alebo sa čosi opýtať? Super! Použite náš
        jednoduchý kontaktný formulár nižšie a my sa Vám ozveme. Ďakujeme, že
        nás kontaktujete.
      </div>
      <div className={`input-group${inputErrors?.mail ? ' error' : ''}`}>
        <input
          type="text"
          value={inputs?.mail || ''}
          placeholder="Tvôj e-mail"
          onChange={(e) =>
            setInputs((prevInputs) => ({ ...prevInputs, mail: e.target.value }))
          }
        />
        <span className="err-msg">{inputErrors?.mail}</span>
      </div>
      <div className={`input-group${inputErrors?.message ? ' error' : ''}`}>
        <textarea
          placeholder="Správa"
          value={inputs?.message || ''}
          onChange={(e) =>
            setInputs((prevInputs) => ({
              ...prevInputs,
              message: e.target.value,
            }))
          }
        />
        <span className="err-msg">{inputErrors?.message}</span>
      </div>
      {formState === formStates.error ? (
        <div className="form-result error">
          {inputErrors === null
            ? 'Vyskytla si chybička, skúste nás kontaktovať neskôr.'
            : 'Vyskytla si chybička, skontrolujte si formulár.'}
        </div>
      ) : null}
      {formState === formStates.success ? (
        <div className="form-result success">
          Vaša správa k nám dorazila, budeme Vás v blízkej dobe kontaktovať.
        </div>
      ) : null}
      <Button
        type="submit"
        onClick={onSubmit}
        label="Odoslať"
        loading={formState === formStates.loading}
      />
    </div>
  );
}

ContactForm.defaultProps = {};
ContactForm.prototype.propTypes = {};
