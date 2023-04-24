import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import amplitude from "amplitude-js";

amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE_PUBLISH_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
