import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import HeaderPageNavigation from "./components/HeaderPageNavigation";
import { Provider } from "react-redux";
import store from "./store";
import "font-awesome/css/font-awesome.min.css";
import "./App.scss";

function ConnectedApp() {
  const routesComponents = routes.map(({ path, component, exact }) => (
    <Route exact={exact} path={path} component={component} key={path} />
  ));

  return (
    <Provider store={store}>
      <div>
        <Router>
          <HeaderPageNavigation links={routes} />
          <Switch>{routesComponents}</Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default ConnectedApp;
