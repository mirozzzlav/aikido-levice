import React, { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const WindowContext = createContext({});

export default function WindowProvider({ children }) {
  const effectFiredRef = useRef(null);
  const [contextVal, setContextVal] = useState({});

  useEffect(() => {
    if (effectFiredRef.current) {
      return;
    }
    effectFiredRef.current = true;
    const setContextValLoaded = () =>
      setContextVal((prev) => ({ ...prev, pageLoaded: true }));

    if (document.readyState === 'complete') {
      setContextValLoaded();
      return;
    }
    window.addEventListener('load', setContextValLoaded);
  }, []);

  return (
    <WindowContext.Provider value={contextVal}>
      <div>{children}</div>
    </WindowContext.Provider>
  );
}

WindowProvider.prototype.propTypes = {
  children: PropTypes.node.isRequired,
};
