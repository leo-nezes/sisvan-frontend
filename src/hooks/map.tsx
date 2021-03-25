import React, { createContext, useCallback, useContext, useState } from 'react';

import propTypes from 'prop-types';

import api from '../services/api';

interface IMapContextData {
  mapContainerInformation: boolean;
  information: IInformation;
  showContainerInformation(showInformation?: boolean): void;
  loadInformation(code: number): void;
}

interface IIndexInformation {
  quantity: number;
  percentage: number;
}

interface IInformation {
  city: string;
  state: string;
  region: string;
  total: number;
  veryLowWeightForAge: IIndexInformation;
  lowWeightForAge: IIndexInformation;
  properWeightForAge: IIndexInformation;
  highWeightForAge: IIndexInformation;
}

const MapContext = createContext<IMapContextData>({} as IMapContextData);

const MapProvider: React.FC = ({ children }) => {
  const [mapContainerInformation, setMapContainerInformation] = useState(false);
  const [information, setInformation] = useState<IInformation>({
    city: '',
    state: '',
    region: '',
    total: 0,
    veryLowWeightForAge: {
      quantity: 0,
      percentage: 0,
    },
    lowWeightForAge: {
      quantity: 0,
      percentage: 0,
    },
    properWeightForAge: {
      quantity: 0,
      percentage: 0,
    },
    highWeightForAge: {
      quantity: 0,
      percentage: 0,
    },
  });

  const showContainerInformation = (): void => {
    setMapContainerInformation((state) => !state);
  };

  const loadInformation = useCallback(async (code: number) => {
    const response = await api.get(`/pesoidade/?code=${150010}`);

    const {
      municipio,
      uf,
      regiao,
      PAE_porcentagem,
      PAE_quantidade,
      PB_porcentagem,
      PB_quatidade,
      PE_porcentagem,
      PE_quantidade,
      PMB_porcentagem,
      PMB_quantidade,
      total,
    } = response.data;

    setInformation({
      city: municipio,
      state: uf,
      region: regiao,
      total,
      veryLowWeightForAge: {
        quantity: PMB_quantidade,
        percentage: PMB_porcentagem,
      },
      lowWeightForAge: {
        quantity: PB_quatidade,
        percentage: PB_porcentagem,
      },
      properWeightForAge: {
        quantity: PAE_quantidade,
        percentage: PAE_porcentagem,
      },
      highWeightForAge: {
        quantity: PE_quantidade,
        percentage: PE_porcentagem,
      },
    });
  }, []);

  return (
    <MapContext.Provider
      value={{
        mapContainerInformation,
        information,
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
