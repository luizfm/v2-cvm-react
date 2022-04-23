/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useState } from 'react';

const WINDOW_SIZES = {
  LARGE: {
    MIN: 1025,
  },
  MEDIUM: {
    MIN: 481,
    MAX: 1024,
  },
  MOBILE: {
    MAX: 480,
  },
};

export default () => {
  const hasWindow = typeof window !== 'undefined';

  const getSize = useCallback(
    () => ({
      width: hasWindow ? window.innerWidth : undefined,
      height: hasWindow ? window.innerHeight : undefined,
    }),
    [hasWindow]
  );

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!hasWindow) {
      return false;
    }

    const handleSize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [getSize, hasWindow]);

  const isMobile = windowSize.width <= WINDOW_SIZES.MOBILE.MAX;
  const isMedium = windowSize.width <= WINDOW_SIZES.MEDIUM.MAX
  && windowSize.width >= WINDOW_SIZES.MEDIUM.MIN;
  const isLarge = windowSize.width >= WINDOW_SIZES.LARGE.MIN

  return {
    windowSize, isMobile, isMedium, isLarge
  }
};
