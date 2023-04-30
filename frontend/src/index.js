import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './resources/bootstrap.min.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import store from "./store";
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
