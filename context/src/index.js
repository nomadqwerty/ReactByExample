import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { Provider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
);
