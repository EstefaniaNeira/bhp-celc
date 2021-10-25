import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Registration from "./components/Registration/Registration";
import SOS from "./components/SOS/SOS";
import RecommendedWork from "./components/RecommendedWork/RecommendedWork";

const Routes = () => {
  return (
    <>
      <Router>
        
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/registration" component={Registration} />
          <Route path="/SOS" component={SOS} />
          <Route path="/RecommendedWork" component={RecommendedWork} />
      

        </Switch>
      </Router>
    </>
  );
};

export default Routes;
