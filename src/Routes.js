import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';


const App = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;


