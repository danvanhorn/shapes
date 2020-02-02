import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "./store/reducers/reducers";
import { sagas } from "./store/sagas/sagas";
import "./App.css";
import Drawer from "./components/Drawer/Drawer";

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer);

// sagaMiddleware.run();

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <Drawer />
    </div>
  </Provider>
);

export default App;
