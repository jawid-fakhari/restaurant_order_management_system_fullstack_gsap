import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//importare store che abbiamo creato poi lo passiamo come prop al Provider
import { store } from "./redux/store.js";
// importare Provider dal react-redux che abbraccia l'applicazione, quindi è accessibile da per tutto
import { Provider } from "react-redux";



const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
