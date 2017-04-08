import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const rootEl = document.getElementById("root");
const render = (Component: React.ComponentClass<{}>) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => { render(App); });
}
