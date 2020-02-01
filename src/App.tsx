import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers/reducers';
import './App.css';
import { Drawer } from './components/Drawer';


const sagaMiddleware = createSagaMiddleware({});
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run();

const App = (): React.ReactNode => (
  <Provider store={store}>
    <div className="App">
      <Drawer />
    </div>
  </Provider>
);

export default App;
