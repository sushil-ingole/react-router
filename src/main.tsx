import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home.tsx';
import Login from './Login.tsx';
import User from './User.tsx';
import Navbar from './Navbar.tsx';
import Error from './Error.tsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/user/:username?',
        element: <User />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
