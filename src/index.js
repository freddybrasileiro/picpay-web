import App from "containers/App";
import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersReducer from "modules/Users/reducer";
import paymentReducer from "modules/Payment/reducer";
import { getUsersWatcher } from "modules/Users/sagas";
import { doTransactionWatcher } from "modules/Payment/sagas";

import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
import styledComponentsTheme from "styledComponentsTheme";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const paymentPersistConfig = {
  key: "creditCards",
  storage: storage,
  whitelist: ["creditCards", "selectedCreditCardIndex"]
};

// create a redux store with our reducer above and middleware
const store = createStore(
  combineReducers({
    users: usersReducer,
    payment: persistReducer(paymentPersistConfig, paymentReducer)
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);
global.getStore = () => store;
const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(getUsersWatcher);
sagaMiddleware.run(doTransactionWatcher);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={styledComponentsTheme}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
