import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles/index.css"
import { Menu } from './root/Menu';
import { About } from './root/About';
import { Services } from './root/Sevices';
import { Events } from './root/Events';
import { Home } from './root/Home';
import { Match } from './root/Match';
import { Vs } from './root/Vs';



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/match-metrics",
      element: <Match />
    },
    {
      path: "/vs",
      element: <Vs />
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

