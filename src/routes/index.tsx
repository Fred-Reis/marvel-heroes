import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/pages/Home';
import Heroe from 'src/pages/Heroe';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/heroe" component={Heroe} />
    </Switch>
  );
};

export default Routes;
