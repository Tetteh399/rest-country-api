import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './context/ContextTheme';
import { ApiProvider } from './context/ContextApi';
import { BrowserRouter as Routes } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <ThemeProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);


