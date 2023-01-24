import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './context/theme.provider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Theme>
    <App />
  </Theme>
)
