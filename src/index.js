import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

const store = createStore(rootReducer);
console.log(store.text);

render(
  <Provider store={store}>
      <MuiThemeProvider>
          <App />
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
