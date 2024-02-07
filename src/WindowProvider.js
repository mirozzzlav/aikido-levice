import React, { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { checkImagesLoaded, waitForImages } from 'src/helpers';

export const WindowContext = createContext({});

export default function WindowProvider({ children }) {
  const effectFiredRef = useRef(null);
  const [contextVal, setContextVal] = useState({});

  useEffect(() => {
    if (effectFiredRef.current) {
      return;
    }
    effectFiredRef.current = true;
    const setContextValLoaded = () => {
      setContextVal((prev) => ({ ...prev, pageLoaded: true }));
    };

    waitForImages(document.querySelectorAll('img')).then(() => {
      setContextValLoaded(true);
    });
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
