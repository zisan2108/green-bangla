import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Main from './layout/Main'
import About from './pages/About/About'

import { Contact } from './pages/Contact/Contact'
import { Category } from './pages/Categorys/Category'
import { Services } from './pages/Service/Services'
import { Register } from './pages/SignUp/Register'
import { Login } from './pages/Login/Login'





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/catecory",
        element:<Category></Category>,
      },
      {
        path: "/service",
        element:<Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
