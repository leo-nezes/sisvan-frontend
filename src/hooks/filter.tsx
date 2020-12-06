import React, { createContext, useCallback, useContext, useState } from 'react';

import propTypes from 'prop-types';

interface IFilterContextData {
  filterObject: object;
  setFilter(data: object): void;
  toFilter(): void;
}

const FilterContext = createContext<IFilterContextData>(
  {} as IFilterContextData,
);

const FilterProvider: React.FC = ({ children }) => {
  const [filterObject, setFilterObject] = useState({});

  const setFilter = useCallback((data: object) => {
    setFilterObject(data);
  }, []);

  const toFilter = useCallback(() => {
    console.log(filterObject);
  }, [filterObject]);

  return (
    <FilterContext.Provider value={{ filterObject, setFilter, toFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: propTypes.node,
};

FilterProvider.defaultProps = {
  children: undefined,
};

function useFilter(): IFilterContextData {
  const context = useContext(FilterContext);

  return context;
}

export { FilterProvider, useFilter };
