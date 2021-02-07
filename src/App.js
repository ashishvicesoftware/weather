import "./App.css";
import React, { Component, Suspense } from "react";

import { LogoutButton, Loading, NavBar } from "./components";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { LoginButton } from "./components";

import { Home, Weather } from "./views";
import ProtectedRoute from "./auth/protected-route";
import "./i18n";

function App() {
  const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Suspense fallback={null}>
        <NavBar />
        <div className="container flex-grow-1">
          <div className="mt-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/logout" component={LogoutButton} />
              <ProtectedRoute path="/weather" component={Weather} />
            </Switch>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
