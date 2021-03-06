import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";
import Error from "./pages/Error";

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
      <Route path="/error/:id">
        <Error />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
