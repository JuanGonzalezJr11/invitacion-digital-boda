import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './components/context/context';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './notification/Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotificationProvider>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </NotificationProvider>
);

reportWebVitals();
