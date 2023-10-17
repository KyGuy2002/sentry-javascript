/**
 * Creates <style> element for widget dialog
 */
export function createDialogStyles(d: Document): HTMLStyleElement {
  const style = d.createElement('style');

  style.textContent = `
.dialog {
  line-height: 25px;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  position: fixed;
  inset: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}

.dialog__content {
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  border: var(--border);
  padding: 24px;
  border-radius: 20px;
  background-color: var(--bg-color);
  color: var(--fg-color);

  width: 320px;
  max-width: 100%;
  max-height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0 4px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
  dialog:not([open]) & {
    transform: translate(0, -16px) scale(0.98);
  }
}

.dialog__header {
  font-size: 20px;
  font-weight: 600;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
}

.error {
  color: red;
  margin-bottom: 16px;
}

.form {
  display: grid;
  overflow: auto;
  flex-direction: column;
  gap: 16px;
  padding: 0;
}

.form__error-container {
  color: var(--error-color);
}

.form__error-container--hidden {
  display: none;
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  box-sizing: border-box;
  border: var(--border);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  &:focus {
    border-color: rgba(108, 95, 199, 1);
  }
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.btn-group {
  display: grid;
  gap: 8px;
  margin-top: 8px;
}

.btn {
  line-height: inherit;
  border: var(--border);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;

  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
}

.btn--primary {
  background-color: rgba(108, 95, 199, 1);
  border-color: rgba(108, 95, 199, 1);
  color: #fff;
  &:hover {
    background-color: rgba(88, 74, 192, 1);
  }
}

.btn--default {
  background-color: transparent;
  color: var(--fg-color);
  font-weight: 500;
  &:hover {
    background-color: var(--bg-accent-color);
  }
}
`;

  return style;
}
