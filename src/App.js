import "./App.css";
import React, { Suspense } from "react";
import { LogoutButton, LoginButton, NavBar } from "./components";
import { Route, Switch } from "react-router-dom";
import { Home, Weather } from "./views";
import "./i18n";

function App() {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Suspense fallback={null}>
        <NavBar />
        <div className="container flex-grow-1">
          <div className="mt-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/logout" component={LogoutButton} />
              <Route path="/weather" component={Weather} />
              <Route path="/log-in" component={LoginButton} />
            </Switch>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
