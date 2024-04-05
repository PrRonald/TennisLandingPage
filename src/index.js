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



const router = createBrowserRouter([{
  element: <App />,
  children:[
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/menu",
    element: <Menu />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/services",
    element: <Services />
  },
  {
    path:"/event",
    element: <Events />
  }
]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

