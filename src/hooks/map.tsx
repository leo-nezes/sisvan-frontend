import React, { createContext, useCallback, useContext, useState } from 'react';

import propTypes from 'prop-types';

type FilterDataType = {
  map: string;
};

interface IMapContextData {
  filterData: FilterDataType;
  setFilter(option: FilterDataType): void;
  toFilter(): void;
}

interface IMapFilter {
  map: string;
}

const MapContext = createContext<IMapContextData>({} as IMapContextData);

const MapProvider: React.FC = ({ children }) => {
  const [filterData, setFilterData] = useState<IMapFilter>({ map: 'states' });

  const setFilter = useCallback((option: FilterDataType) => {
    setFilterData(option);
  }, []);

  const toFilter = useCallback(() => {
    console.log('Filtrar');
  }, []);

  return (
    <MapContext.Provider value={{ filterData, setFilter, toFilter }}>
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
