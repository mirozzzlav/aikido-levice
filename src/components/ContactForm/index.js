import React, { useCallback, useEffect, useRef, useState } from 'react';
import config, { formStates } from 'src/config';
import Button from 'src/components/Button';
import style from 'src/components/ContactForm/style';
import loadTurnstile from './turnstile';

export async function sendContactFormMail(from, message, token) {
  if (!config.sender.enabled || !token) return false;

  const formData = new URLSearchParams();
  formData.append('from', from);
  formData.append('message', message);
  formData.append('cf-turnstile-response', token);

  return fetch(config.sender.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  })
    .then((resp) => (resp.ok ? resp.text() : 'NOK'))
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
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState('');
  const turnstileContainer = useRef(null);
  const turnstileWidget = useRef(null);
  const submitting = useRef(false);

  useEffect(() => {
    if (!config.sender.enabled || !config.turnstile.siteKey) return undefined;

    let cancelled = false;
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled) return;
        turnstileWidget.current = turnstile.render(turnstileContainer.current, {
          sitekey: config.turnstile.siteKey,
          action: 'contact',
          // Non-interactive mode is configured for this sitekey in Cloudflare.
          execution: 'render',
          language: 'sk',
          size: 'flexible',
          callback: (token) => {
            setTurnstileToken(token);
            setTurnstileError('');
          },
          'expired-callback': () => setTurnstileToken(''),
          'timeout-callback': () => setTurnstileToken(''),
          'error-callback': () => {
            setTurnstileToken('');
            setTurnstileError(
              'Overenie sa nepodarilo. Skúste ho znova alebo obnovte stránku.',
            );
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          setTurnstileError(
            'Overenie sa nepodarilo načítať. Obnovte stránku a skúste znova.',
          );
        }
      });

    return () => {
      cancelled = true;
      if (turnstileWidget.current !== null) {
        window.turnstile.remove(turnstileWidget.current);
        turnstileWidget.current = null;
      }
    };
  }, []);

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
    if (!config.sender.enabled || !turnstileToken || submitting.current) return;
    const errors = validateInputs();
    setInputErrors(errors);
    if (!errors) {
      submitting.current = true;
      setFormState(formStates.loading);
      const sent = await sendContactFormMail(
        inputs.mail,
        inputs.message,
        turnstileToken,
      );
      // Tokens are single-use, including attempts that fail after verification.
      setTurnstileToken('');
      if (turnstileWidget.current !== null) {
        window.turnstile.reset(turnstileWidget.current);
      }
      submitting.current = false;
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
  }, [validateInputs, inputs, turnstileToken]);

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
      {config.sender.enabled ? (
        <div>
          <div ref={turnstileContainer} />
          <p role="status">
            {config.turnstile.siteKey
              ? turnstileError
              : 'Kontaktný formulár je dočasne nedostupný. Kontaktujte nás telefonicky.'}
          </p>
        </div>
      ) : (
        <p>Odosielanie formulára je vo vývojovom režime vypnuté.</p>
      )}
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
        disabled={!config.sender.enabled || !turnstileToken}
      />
    </div>
  );
}
