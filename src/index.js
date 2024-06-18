import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles/index.css"
import { Match } from './root/match/Match/Match';
import { Tennis } from './root/Tennis';
import { Players } from './root/player/Players';
import { LiveMatch } from './root/LiveMatch';
import { ErrorView } from './root/match/Match/ErrorView';
import {Provider} from "react-redux"
import store from './store';
const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <ErrorView
      error={"AN ERROR HAS HAPPENED"}
      Return={"Return to Home"}
      to={"/"} />,
      element: <App />,
    },
    {
      path: "/Tennis",
      errorElement: <ErrorView 
                      Return={"Return to Home"}
                      message={"AN ERROR HAS HAPPENED"}
                      to={"/Tennis"} />,
      element: <Tennis />,
      children: [
        {
          path: "Players",
          element: <Players />,
        },
        {
          path: "Players/match/:playerId",
          element: <Match />,
        },
        {
          path: "Players/live-match/:id",
          element: <LiveMatch />,
        },

      ]
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

