import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextApi from "./lib/ContextApi.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  //disabling StrictMode to prevent our app from rendering twice
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>
);
