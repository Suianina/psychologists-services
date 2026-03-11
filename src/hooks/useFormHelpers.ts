import { useCallback } from 'react';

export function useFormHelpers() {
  const focusFirstError = useCallback(() => {
    const errorEl = document.querySelector('[aria-invalid="true"]');
    if (errorEl instanceof HTMLElement) {
      errorEl.focus();
    }
  }, []);

  return { focusFirstError };
}
