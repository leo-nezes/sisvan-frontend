import React from 'react';

import propTypes from 'prop-types';

import { MapProvider } from './map';
import { FilterProvider } from './filter';

const AppProvider: React.FC = ({ children }) => (
  <MapProvider>
    <FilterProvider>{children}</FilterProvider>
  </MapProvider>
);

AppProvider.propTypes = {
  children: propTypes.node,
};

AppProvider.defaultProps = {
  children: undefined,
};

export default AppProvider;
