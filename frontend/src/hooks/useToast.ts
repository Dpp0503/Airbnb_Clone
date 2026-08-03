import { useState, useEffect } from 'react';

export function useToast(timeout = 3000) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, timeout]);

  return { toastMessage, setToastMessage };
}
