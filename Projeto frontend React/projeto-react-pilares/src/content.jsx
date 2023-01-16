import React from "react";
import { Switch, Route } from "react-router-dom";
import Store from "./pages/Store";

const  Content = () => {
    return (
        <Switch>
            <Route exact path  ='/' component= {Store}></Route>
        </Switch>
      );
}
 
export default Content ;