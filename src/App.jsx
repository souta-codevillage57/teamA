import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { SignUp, Login, Home } from "./template/index";

import ItemSelect from "./pages/ItemSelect";
import Answer from "./pages/Answer";
import { AuthProvider } from "./Auth";
import LoggedInRoute from "./LoggedInRpute";

import "./sass/main.css";
import "./sass/main.css.map";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path={"/ItemSelect"} component={ItemSelect} />
              <Route exact path={"/Answer"} component={Answer} />
              <Route exact path={"/signup"} component={SignUp} />
              <Route exact path={"/login"} component={Login} />
              <LoggedInRoute exact path={"(/)?"} component={Home} />
            </Switch>
          </Router>
        </AuthProvider>
      </main>
    </>
  );
};

export default App;
