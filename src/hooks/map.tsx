import React, {
  createContext,
  RefObject,
  useCallback,
  useContext,
  useState,
} from 'react';

interface IMapContextData {
  mapRef: RefObject<HTMLDivElement> | undefined;
  getMapRef(ref: RefObject<HTMLDivElement>): string;
}

const MapContext = createContext<IMapContextData>({} as IMapContextData);

const MapProvider: React.FC = () => {
  const [mapRef, setMapRef] = useState<RefObject<HTMLDivElement>>();

  const getMapRef = useCallback((ref: RefObject<HTMLDivElement>) => {
    setMapRef(ref);

    return 'ok';
  }, []);

  return <MapContext.Provider value={{ mapRef, getMapRef }} />;
};

function useMap(): IMapContextData {
  const context = useContext(MapContext);

  return context;
}

export { useMap };
