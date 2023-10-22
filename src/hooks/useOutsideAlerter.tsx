import React, { useEffect } from 'react';

type OutsideAlerterProps = {
  ref: React.MutableRefObject<HTMLElement>;
  handleEvent: () => void;
};

export const useOutsideAlerter: React.FC<OutsideAlerterProps> = (
  ref,
  handleEvent
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleEvent();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
