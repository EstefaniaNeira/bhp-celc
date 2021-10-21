import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


import Landing from "./components/Landing/Landing";
import Registration from "./components/Registration/Registration";



const Routes = () => {
  return (
    <>
      <Router>
        
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/registration" component={Registration}></Route>
      

        </Switch>
      </Router>
    </>
  );
};

export default Routes;
