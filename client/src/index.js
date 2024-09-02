import React from 'react';
import { createRoot } from "react-dom/client";

// import { Provider } from 'react-redux'; // deprecato
// import { createStore, applyMiddleware, componse } from 'redux'; // deprecato
// import thunk from 'redux-thunk'; // deprecato

import { configureStore } from "@reduxjs/toolkit"; //redux-toolkit al posto di tecnologie deprecate di redux
import reducers from "./reducers";

import App from './App';

// const store = createStore(reducres, compose(applyMiddleware(thunk))) // deprecato

const store = configureStore({
  reducer: reducers,
  // puoi aggiungere middleware aggiuntivi, se necessario
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* altri middleware */),
  // Puoi attivare Redux DevTools solo in ambiente di sviluppo
  devTools: process.env.NODE_ENV !== "production",
});


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

