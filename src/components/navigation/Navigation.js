import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  HomeScreen,
  ProfileScreen,
  MessagesFeedScreen,
  SignUpScreen,
  NotFoundScreen,
} from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      {/* home page */}
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      {/* profile page */}
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
      {/* signup page */}
      <ConnectedRoute exact path="/signup" component={SignUpScreen} />
      {/* messages feed page */}
      <ConnectedRoute
        exact
        path="/messagesfeed"
        component={MessagesFeedScreen}
      />

      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
