import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main';
import Carrinho from './components/carrinho';
import Thanks from './components/thanks';
import Inicio from './components/inicio';
import Error from './components/error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Inicio />
      }, 
      {
        path: 'produtos',
        element: <Main />
      },
      {
        path: 'carrinho',
        element: <Carrinho />
      },
      {
        path: 'thanks',
        element: <Thanks />
      },
      {
        path: 'error',
        element: <Error />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
