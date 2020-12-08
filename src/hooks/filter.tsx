import React, { createContext, useCallback, useContext, useState } from 'react';

import propTypes from 'prop-types';

type FilterObjectType = {
  [key: string]: string;
};

interface IFilterContextData {
  filterObject: FilterObjectType;
  setFilter(data: FilterObjectType): void;
  toFilter(): void;
}

const FilterContext = createContext<IFilterContextData>(
  {} as IFilterContextData,
);

const FilterProvider: React.FC = ({ children }) => {
  const [filterObject, setFilterObject] = useState({});

  const setFilter = (data: FilterObjectType): void => {
    let newFilters = {};
    const filters = localStorage.getItem('@SISVAN:filter');

    if (filters) {
      newFilters = { ...JSON.parse(filters) };
    }

    localStorage.setItem(
      '@SISVAN:filter',
      JSON.stringify({ ...newFilters, ...data }),
    );

    setFilterObject({ ...newFilters, ...data });
  };

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
