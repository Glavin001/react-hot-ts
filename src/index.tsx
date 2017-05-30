import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

function renderApp() {
    render(
        <AppContainer>
            <App/>
        </AppContainer>,
         document.getElementById("root")
    );
}


if (module.hot) {
    module.hot.accept();
    renderApp();
}
else {
    renderApp();
}