import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./mainPage";
import DemoPage from "./demoPage";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={MainPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/demo`}
            component={DemoPage}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
