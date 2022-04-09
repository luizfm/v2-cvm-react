import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';

import App from '../App';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" element={<Navigate to="/home-page" replace />} />
      <Route path="/home-page" element={<App />} />
      <Route path="/projects" element={<App />} />
    </Switch>
  </Router>
);

export default Routes;
