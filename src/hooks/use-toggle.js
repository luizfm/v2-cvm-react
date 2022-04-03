import { useCallback, useState } from 'react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    console.log('aqui');
    setIsOpen((prevValue) => !prevValue);
  }, []);

  return [isOpen, onToggle];
};
