import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Registration from "./components/Registration/Registration";
import SOS from "./components/SOS/SOS";
import RecommendedWork from "./components/RecommendedWork/RecommendedWork";
import Harness from "./components/Harness/harness";
import Checklist from "./components/Checklist/Checklist";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/registration" component={Registration} />
          <Route path="/SOS" component={SOS} />
          <Route path="/Harness" component={Harness} />
          <Route path="/Checklist" component={Checklist}></Route>
          <Route path="/RecommendedWork" component={RecommendedWork} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
