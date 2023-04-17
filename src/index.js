import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import amplitude from "amplitude-js";

amplitude.getInstance().init("4263e426732edad34ab6ae666a36cc39");
const root = ReactDOM.createRoot(document.getElementById("root"));

// NOTE: github is very easy!!

root.render(<App />);
