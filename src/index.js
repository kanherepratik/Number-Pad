import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/* assets */
import "./assets/App.css";
/* assets */

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
