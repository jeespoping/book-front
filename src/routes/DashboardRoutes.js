import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";

export default function DashboardRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}
