import React from 'react';
import { createBrowserHistory } from "history";
import Main from './pages/Main';
import Stats from './pages/Stats';
import Charts from './pages/Charts';
import {
 Router,
  Switch,
  Route,
} from "react-router-dom";
import '../';

const history = createBrowserHistory();

function App() {

  return (
    <>
    <Router history={history}>
    <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
    <Route path="/users" exact>
      <Stats  />
    </Route>
    <Route path="/user" exact>
    <Charts />
    </Route>
  </Switch>
</Router>
    </>
  );
}

export default App;
