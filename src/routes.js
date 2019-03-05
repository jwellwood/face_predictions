import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/Pages/App';
import Navigation from './components/ui/Navbar/Navbar';
import About from './components/Pages/About';
import Background from './components/ui/Background/Background';
import Home from './components/Pages/Home';

const Routes = () => {
  return (
    <div>
      <Navigation />
      <Background />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detect" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Routes;
