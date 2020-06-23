import React,{useState} from 'react';
import { createBrowserHistory } from "history";
import Main from './pages/Main';
import Stats from './pages/Stats';
import Charts from './pages/Charts';
import {
 Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';


function App() {
  const [currentUser,setCurrentUser] = useState(0);
  return (
    <>
    <Router>
    <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
    <Route path="/users" exact>
      <Stats setCurrentUser={setCurrentUser} />
    </Route>
    <Route path="/user" exact>
    <Charts currentUserId={currentUser}/>
    </Route>
  </Switch>
</Router>
    </>
  );
}

export default App;
