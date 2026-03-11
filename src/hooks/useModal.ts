import { useCallback, useEffect, useState } from 'react';

export function useModal(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);

  const close = useCallback(() => setOpen(false), []);
  const openModal = useCallback(() => setOpen(true), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  return { open, openModal, close };
}
