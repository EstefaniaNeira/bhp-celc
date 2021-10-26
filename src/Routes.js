import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Registration from "./components/Registration/Registration";
import SOS from "./components/SOS/SOS";
import Checklist from "./components/Checklist/Checklist";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/Checklist" component={Checklist}></Route>
          <Route path="/SOS" component={SOS}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
