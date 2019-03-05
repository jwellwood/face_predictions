import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Navigation from './components/Navbar/Navbar';
import About from './components/About/About';
import Background from './components/Background/Background';

const Routes = () => {
  return (
    <div>
      <Navigation />
      <Background />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Routes;
