import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RootCmp } from "./root-cpm.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RootCmp />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

//Register PWA
serviceWorkerRegistration.register();
