import React,{useState} from 'react';
import Main from './pages/Main';
import Stats from './pages/Stats';
import Charts from './pages/Charts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

function App() {
  const [currentUser,setCurrentUser] = useState({});
  return (
    <>
    <Router>
    <Switch>
    <Route path="/">
      <Main />
    </Route>
    <Route path="/users" exact>
      <Stats />
    </Route>
    <Route path="/user" exact>
    <Charts/>
    </Route>
  </Switch>
</Router>
    </>
  );
}

export default App;
