import React, { createContext, useContext, useState } from 'react';

import propTypes from 'prop-types';

interface IMapContextData {
  mapContainerInformation: boolean;
  showContainerInformation(showInformation?: boolean): void;
  loadInformation(cityName: string): void;
}

interface IIndexInformation {
  descricao: string;
  quantidade: number;
  porcentagem: number;
}

interface IInformation {
  [city: string]: {
    pesoIdade: [data: IIndexInformation];
    pesoAltura: [data: IIndexInformation];
    alturaIdade: [data: IIndexInformation];
    imcIdade: [data: IIndexInformation];
  };
}

const MapContext = createContext<IMapContextData>({} as IMapContextData);

const MapProvider: React.FC = ({ children }) => {
  const [mapContainerInformation, setMapContainerInformation] = useState(false);

  const showContainerInformation = (): void => {
    setMapContainerInformation((state) => !state);
  };

  const loadInformation = (cityName: keyof IInformation): boolean => {
    return false;
  };

  return (
    <MapContext.Provider
      value={{
        mapContainerInformation,
        showContainerInformation,
        loadInformation,
      }}
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
