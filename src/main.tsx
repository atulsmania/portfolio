import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";
import AppContextProvider from "context/GlobalContext";
import "src/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
