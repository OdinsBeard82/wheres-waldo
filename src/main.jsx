import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent'; // import your component
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
