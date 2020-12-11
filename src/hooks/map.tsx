import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import propTypes from 'prop-types';

interface IMapContextData {
  mapContainerInformation: boolean;
  showContainerInformation(): void;
}

const MapContext = createContext<IMapContextData>({} as IMapContextData);

const MapProvider: React.FC = ({ children }) => {
  const [mapContainerInformation, setMapContainerInformation] = useState(false);

  const showContainerInformation = useCallback((): void => {
    setMapContainerInformation((state) => !state);
  }, []);

  return (
    <MapContext.Provider
      value={{ mapContainerInformation, showContainerInformation }}
    >
      {children}
    </MapContext.Provider>
  );
};

MapProvider.propTypes = {
  children: propTypes.node,
};

MapProvider.defaultProps = {
  children: undefined,
};

function useMap(): IMapContextData {
  const context = useContext(MapContext);

  return context;
}

export { MapProvider, useMap };
