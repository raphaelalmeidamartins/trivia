import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Ranking from './pages/Ranking';
import Results from './pages/Results';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/game/ranking" component={Ranking} />
      <Route exact path="/game/results" component={Results} />
      <Route exact path="/game/settings" component={Settings} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
