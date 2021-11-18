import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react';


const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
}) 

// const logger = createLogger({
//   // ...options
// });

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push()
}


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


