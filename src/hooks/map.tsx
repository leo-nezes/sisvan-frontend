import React, { createContext, useCallback, useContext, useState } from 'react';

import propTypes from 'prop-types';

import municipios from '../data/municipios-pa.json';

interface IMapContextData {
  mapContainerInformation: boolean;
  showContainerInformation(): void;
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
  const [information, setInformation] = useState<IInformation>();

  const showContainerInformation = useCallback((): void => {
    setMapContainerInformation((state) => !state);
  }, []);

  // function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  //   return key in obj;
  // }

  const loadInformation = useCallback((cityName: keyof IInformation) => {
    // const leo = hasKey(municipios.cities, cityName);
    // let secondValue: string = (someObject as any)[key];

    console.log('Aquiiiiiiiiiii: ', Object.keys(municipios.cities));

    // const leo = (municipios.cities as IInformation)[cityName];

    // if (hasKey(municipios.cities, cityName)) {

    //   // setInformation();
    // }
  }, []);

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
