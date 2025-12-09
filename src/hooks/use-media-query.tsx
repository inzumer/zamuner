'use client';

import { useEffect, useState } from 'react';
import { MEDIA_QUERY } from '@constants';

export const useMediaQuery = (query: keyof typeof MEDIA_QUERY) => {
  const mediaQuery = MEDIA_QUERY[query];

  const [isMatching, setIsMatching] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia(mediaQuery).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMatching(event.matches);
    };

    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);

  }, [mediaQuery]);

  return isMatching;
};
