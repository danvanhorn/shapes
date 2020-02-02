import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/reducers";
import "./App.css";
import Drawer from "./components/Drawer/ConnectedDrawer";

// const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle, no-undef, @typescript-eslint/no-explicit-any */
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

// sagaMiddleware.run();

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <Drawer />
    </div>
  </Provider>
);

export default App;
