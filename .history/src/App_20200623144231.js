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
    <Route path="/users">
      <Sta />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>
    <div className="App">
      <Charts/>
    </div>
    </>
  );
}

export default App;
