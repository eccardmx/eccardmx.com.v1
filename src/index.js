import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
