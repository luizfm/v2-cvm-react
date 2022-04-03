import { useCallback, useState } from 'react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, []);

  return [isOpen, onToggle];
};
