import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <Header /> {/*Add this*/}
    <App />
  </React.StrictMode>,
  rootElement
)

