import React from 'react';

import propTypes from 'prop-types';

import { FilterProvider } from './filter';

const AppProvider: React.FC = ({ children }) => (
  <FilterProvider>{children}</FilterProvider>
);

AppProvider.propTypes = {
  children: propTypes.node,
};

AppProvider.defaultProps = {
  children: undefined,
};

export default AppProvider;
