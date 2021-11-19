import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store, persistor} from "./redux/store";
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'


ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
    
    
  </React.StrictMode>,
  document.getElementById("root")
);
