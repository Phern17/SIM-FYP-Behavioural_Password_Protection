import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import Login from "./Login/pages/Login";
import SignUp from "./SignUp/pages/SignUp";
import PasswordGenerator from "./PwdGen/pages/PwdGen";
import { AuthContext } from "./Shared/components/context/AuthContext";
import { Home } from "./Home/components/home";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import NavigationBar from "./Shared/components/navigation/NavigationBar";

const App = () => {
  const [isLoggedIn, setLoginState] = useState(false);

  //loginState = true means user needs to login

  const login = useCallback(() => {
    setLoginState(true);
  }, []);

  const logout = useCallback(() => {
    setLoginState(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/CreateAccount" exact>
          <SignUp />
        </Route>
        <Route path="/pwdgen">
          <PasswordGenerator />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/CreateAccount" exact>
          <SignUp />
        </Route>
      </Switch>
    );
  }

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <Router>
          <NavigationBar />
          {routes}
        </Router>
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default App;
