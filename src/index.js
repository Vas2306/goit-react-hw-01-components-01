import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
//   <ul>
//     <li>Hello</li>
//     <li>Hello</li>
//      <li>Hello1</li>
// </ul>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
