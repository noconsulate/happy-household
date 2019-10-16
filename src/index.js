import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
//typeface for material-ui, not yet sure what it's fore
require('typeface-roboto')




ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

