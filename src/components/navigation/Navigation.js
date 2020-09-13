import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  HomeScreen,
  ProfileScreen,
  SignUpScreen,
  LoginScreen, 
  NotFoundScreen,
  MessagesScreen,
  CreateMessageScreen,
  UsersScreen,
  UpdateProfileScreen,
} from "../../screens/";
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
      {/* login page */}
      <ConnectedRoute exact path="/login" component={LoginScreen} />
      {/* message feed page */}
      <ConnectedRoute exact path="/messagefeed" component={MessagesScreen} />
      {/* create message page */}
      <ConnectedRoute
        exact
        path="/createmessage"
        component={CreateMessageScreen}
      />
      {/* update user profile page*/}
      <ConnectedRoute
        exact
        path="/updateprofile"
        component={UpdateProfileScreen}
      />
      {/* users list page */}
      <ConnectedRoute exact path="/users" component={UsersScreen} />
      {/* 404 page */}
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
