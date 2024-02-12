import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { waitForImages } from 'src/helpers';

export const LoaderContext = createContext({});

export default function LoaderProvider({ children }) {
  const effectFiredRef = useRef(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [forceReload, setForceReload] = useState(0);
  useEffect(() => {
    if (effectFiredRef.current) {
      return;
    }
    effectFiredRef.current = true;
    waitForImages(document.querySelectorAll('img')).then(() => {
      setPageLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (forceReload) {
      waitForImages(document.querySelectorAll('img')).then(() => {
        setPageLoaded(true);
      });
    }
  }, [forceReload]);

  const contextVal = useMemo(
    () => ({
      pageLoaded,
      setPageLoaded,
      setForceReload: () => setForceReload((prev) => prev + 1),
    }),
    [pageLoaded, setPageLoaded],
  );

  return (
    <LoaderContext.Provider value={contextVal}>
      <div>{children}</div>
    </LoaderContext.Provider>
  );
}

LoaderProvider.prototype.propTypes = {
  children: PropTypes.node.isRequired,
};
