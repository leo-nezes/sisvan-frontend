import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import { MapProvider } from './hooks/map';

import GlobalStyles from './styles';

const App: React.FC = () => (
  <BrowserRouter>
    <MapProvider>
      <Routes />
    </MapProvider>

    <GlobalStyles />
  </BrowserRouter>
);

export default App;
