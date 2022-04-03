import { useCallback, useEffect, useState } from 'react';

export default () => {
  const hasWindow = typeof window !== 'undefined';

  const getScroll = useCallback(
    () => (!hasWindow ? 0 : window.scrollY),
    [hasWindow]
  );
  const [scroll, setScroll] = useState('');

  useEffect(() => {
    if (!hasWindow) {
      return false;
    }

    const handleScroll = () => {
      setScroll(getScroll());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [getScroll, hasWindow]);

  return scroll;
};
