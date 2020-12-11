import React from 'react';

import propTypes from 'prop-types';

import { FilterProvider } from './filter';
import { MapProvider } from './map';

const AppProvider: React.FC = ({ children }) => (
  <FilterProvider>
    <MapProvider>{children}</MapProvider>
  </FilterProvider>
);

AppProvider.propTypes = {
  children: propTypes.node,
};

AppProvider.defaultProps = {
  children: undefined,
};

export default AppProvider;
