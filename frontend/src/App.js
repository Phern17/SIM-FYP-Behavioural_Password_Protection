import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import Login from "./Login/pages/Login";
import SignUp from "./SignUp/pages/SignUp"
import PasswordGenerator from "./PwdGen/pages/PwdGen";
import MainNavigation from "./Shared/components/navigation/MainNavigation"

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/pwdgen" exact>
              <PasswordGenerator />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
