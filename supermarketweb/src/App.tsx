import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Routes />

    <GlobalStyle />
  </Router>
);

// <a href='https://www.freepik.com/vectors/logo'>Logo vector created by freepik - www.freepik.com</a>
export default App;
