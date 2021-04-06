import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppClass from './AppClass';
import AppLogin from './AppLogin';

ReactDOM.render(
  <React.StrictMode>
      <App />
      <p />
      <AppClass />
      <p />
      <AppLogin />
  </React.StrictMode>,
  document.getElementById('root')
);

