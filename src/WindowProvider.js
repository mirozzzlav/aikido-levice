import React, { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const WindowContext = createContext({});

export default function WindowProvider({ children }) {
  const ref = useRef(null);
  const [contextVal, setContextVal] = useState({});

  useEffect(() => {
    if (!ref.current) {
      return () => {};
    }
    const setContextValLoaded = () =>
      setContextVal((prev) => ({ ...prev, pageLoaded: true }));

    window.addEventListener('load', setContextValLoaded);
    return () => window.removeEventListener('load', setContextValLoaded);
  }, [ref.current]);

  return (
    <WindowContext.Provider value={contextVal}>
      <div ref={ref}>{children}</div>
    </WindowContext.Provider>
  );
}

WindowProvider.prototype.propTypes = {
  children: PropTypes.node.isRequired,
};
