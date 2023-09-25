import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import DashBoard from './pages/Dashboard/DashBoard.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Calender from './pages/Calender/Calender.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import MyUpcomingPage from './pages/MyUpcomingPage/MyUpcomingPage.jsx';
import TeamUpcomingPage from './pages/TeamUpcomingPage/TeamUpcomingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: "/home",
  //   element: <HomePage />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/dashboard",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/calender",
    element: <Calender />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/upcoming",
    element: <MyUpcomingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team/upcoming",
    element: <TeamUpcomingPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
