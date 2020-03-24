import React ,{useState, useCallback} from "react";
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
import MainNavigation from "./Shared/components/navigation/MainNavigation";
import { AuthContext } from "./Shared/components/context/AuthContext";

const App = () => {
  
  const [LoginState, setLoginState] = useState(false);

  //loginState = true means user needs to login
  
  const login = useCallback(()=> {
    setLoginState(true);
  }, [])

  const logout = useCallback(() => {
    setLoginState(false);
  }, []) 

  return (
    <div className="App">
        <Router>
          <MainNavigation />
          <main>
          <AuthContext.Provider value={{isLoggedIn: LoginState, login: login, logout: logout}}>
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
            </AuthContext.Provider> 
          </main>
        </Router>
     
    </div>
  );
}

export default App;
