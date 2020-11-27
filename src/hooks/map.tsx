import React, { createContext, useCallback, useContext, useState } from 'react';

interface IContainerInfo {
  filterId: string;
  showContainerInfo: boolean;
}

interface IMapContextData {
  mapInformation: object;
  showInformation(dataInfo: IContainerInfo): void;
}

const MapContext = createContext<IMapContextData>({} as IMapContextData);

const MapProvider: React.FC = () => {
  const [mapInformation, setMapInformation] = useState({
    filterId: '',
    showContainerInfo: false,
  });

  const showInformation = useCallback(
    ({ filterId, showContainerInfo }: IContainerInfo) => {
      setMapInformation({ filterId, showContainerInfo });
    },
    [],
  );

  return <MapContext.Provider value={{ mapInformation, showInformation }} />;
};

function useMap(): IMapContextData {
  const context = useContext(MapContext);

  return context;
}

export { useMap };
