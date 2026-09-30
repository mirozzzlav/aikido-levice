import assert from 'node:assert/strict';
import test from 'node:test';

let scenario = 0;

async function withLoader(check) {
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const previousDocument = Object.getOwnPropertyDescriptor(
    globalThis,
    'document',
  );
  const scripts = [];
  const api = {
    ready() {
      throw new Error('ready() is incompatible with async/defer scripts');
    },
  };
  globalThis.window = {};
  globalThis.document = {
    createElement: () => ({
      removed: false,
      remove() {
        this.removed = true;
      },
    }),
    head: { appendChild: (script) => scripts.push(script) },
  };

  try {
    scenario += 1;
    const { default: load } = await import(
      `../src/components/ContactForm/turnstile.js?test=${scenario}`
    );
    await check({ load, scripts, api });
  } finally {
    if (previousWindow)
      Object.defineProperty(globalThis, 'window', previousWindow);
    else delete globalThis.window;
    if (previousDocument)
      Object.defineProperty(globalThis, 'document', previousDocument);
    else delete globalThis.document;
  }
}

test('async script resolves after load without calling ready()', () =>
  withLoader(async ({ load, scripts, api }) => {
    const pending = load();
    assert.equal(scripts[0].async, true);
    let resolved = false;
    pending.then(() => {
      resolved = true;
    });
    await Promise.resolve();
    assert.equal(resolved, false);

    window.turnstile = api;
    scripts[0].onload();
    assert.equal(await pending, api);
  }));

test('already loaded API works when ready() would throw', () =>
  withLoader(async ({ load, scripts, api }) => {
    window.turnstile = api;
    assert.equal(await load(), api);
    assert.equal(scripts.length, 0);
  }));

test('concurrent loads and page revisits share one script', () =>
  withLoader(async ({ load, scripts, api }) => {
    const pending = load();
    assert.equal(load(), pending);
    assert.equal(scripts.length, 1);
    window.turnstile = api;
    scripts[0].onload();
    await pending;
    assert.equal(await load(), api);
    assert.equal(scripts.length, 1);
  }));

test('network failure permits retry', () =>
  withLoader(async ({ load, scripts, api }) => {
    const pending = load();
    scripts[0].onerror();
    await assert.rejects(pending, /Turnstile/);
    assert.equal(scripts[0].removed, true);

    const retry = load();
    assert.equal(scripts.length, 2);
    window.turnstile = api;
    scripts[1].onload();
    assert.equal(await retry, api);
  }));

test('missing API rejects instead of throwing outside the promise', () =>
  withLoader(async ({ load, scripts, api }) => {
    const pending = load();
    assert.doesNotThrow(() => scripts[0].onload());
    await assert.rejects(pending, /API/);
    assert.equal(scripts[0].removed, true);

    const retry = load();
    window.turnstile = api;
    scripts[1].onload();
    assert.equal(await retry, api);
  }));
