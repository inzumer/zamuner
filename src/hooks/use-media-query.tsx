'use client';

/** Resources */
import { useEffect, useState } from 'react';
import { MEDIA_QUERY } from '@constants';

export const useMediaQuery = (query: keyof typeof MEDIA_QUERY) => {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const mediaQuery = MEDIA_QUERY[query];
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => setIsMatching(event.matches);

    setIsMatching(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return isMatching;
}
