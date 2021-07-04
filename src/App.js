import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ItemSelect from "./pages/ItemSelect";
import AnswerOne from "./pages/Answer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/ItemSelect" component={ItemSelect} />
        <Route exact path="/AnswerOne" component={AnswerOne} />
      </Switch>
    </Router>
  );
};

export default App;
