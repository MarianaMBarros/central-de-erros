import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Forgot from './pages/forgot';
import Home from './pages/home';


const App = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgot">
        <Forgot />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;


