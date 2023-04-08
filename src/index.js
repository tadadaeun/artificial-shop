import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById("root"));
ReactGA.initialize("G-QKXHQVG6ZJ", {
  gaOptions: {
    userId: "0408",
  },
});

root.render(<App />);
