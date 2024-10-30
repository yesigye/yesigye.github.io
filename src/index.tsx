import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import HeaderTop from './components/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const links = [
  {
    "link": "#portfolio",
    "label": "Portfolio"
  },
  // {
  //   "link": "/learn",
  //   "label": "Projects"
  // },
  // {
  //   "link": "mailto:ignatiusyesigye@gmail.com",
  //   "label": "Hire Me"
  // }
];

root.render(
  <React.StrictMode>
    <HeaderTop links={links}/>
    <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
