import React, { useCallback, useState } from 'react';
import config, { formStates } from 'src/config';
import Button from 'src/components/Button';
import style from 'src/components/ContactForm/style';

export async function sendContactFormMail(from, message) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const formData = new URLSearchParams();
  formData.append('from', from);
  formData.append('message', message);

  return fetch(config.sender.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  })
    .then((resp) => resp.text())
    .then((respText) => respText === 'OK')
    .catch(() => false);
}

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
      const sent = await sendContactFormMail(inputs.mail, inputs.message);
      // sendMail function call
      if (sent) {
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
    <div>
      <p className={style.formInfo}>
        Chcete nám niečo napísať, alebo sa čosi opýtať? Super! Použite náš
        jednoduchý kontaktný formulár, alebo volajte trénerovi{' '}
        <strong>Róbertovi Patayovi</strong> na tel. číslo{' '}
        <a href="tel:+421905663416">0905 663 416</a>. Ďakujeme, že nás
        kontaktujete.
      </p>
      <div className={style.inputGroup(inputErrors?.mail)}>
        <input
          type="text"
          value={inputs?.mail || ''}
          placeholder="Tvôj e-mail"
          onChange={(e) =>
            setInputs((prevInputs) => ({ ...prevInputs, mail: e.target.value }))
          }
        />
        <span aria-roledescription="input-state">{inputErrors?.mail}</span>
      </div>
      <div className={style.inputGroup(inputErrors?.message)}>
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
        <span aria-roledescription="input-state">{inputErrors?.message}</span>
      </div>
      <div className={style.formResult(formState)}>
        {formState === formStates.error &&
          inputErrors === null &&
          'Vyskytla si chybička, skúste nás kontaktovať neskôr.'}
        {formState === formStates.error &&
          inputErrors !== null &&
          'Vyskytla si chybička, skontrolujte si formulár.'}
        {formState === formStates.success &&
          'Vaša správa k nám dorazila, budeme Vás v blízkej dobe kontaktovať.'}
      </div>
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
