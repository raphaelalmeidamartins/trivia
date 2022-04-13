import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import Results from './pages/Results';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route path="/game/ranking" component={ Ranking } />
      <Route path="/game/results" component={ Results } />
      <Route path="/game/settings" component={ Settings } />
    </Switch>
  );
}
