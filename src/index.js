import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles/index.css"
import { Match } from './root/Match';
import { Tennis } from './root/Tennis';
import { Players } from './root/Players';
import { LiveMatch } from './root/LiveMatch';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Tennis",
      element: <Tennis />,
      children: [
        {
          path: "Players",
          element: <Players />,
        },
        {
          path: "match",
          element: <Match />,
        },
        {
          path: "live-match",
          element: <LiveMatch />,
        },

      ]
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

