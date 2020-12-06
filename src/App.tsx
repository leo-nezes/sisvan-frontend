import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import AppProvider from './hooks';

import GlobalStyles from './styles';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyles />
  </BrowserRouter>
);

export default App;
