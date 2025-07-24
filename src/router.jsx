import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout';
import Dashboard from './views/Dashboard';
import Surveys from './views/Surveys'; // Ensure the path matches the lowercase filename
import Login from './views/login';
import Signup from './views/signup';
import Team from './views/Team';
import Projects from './views/Projects';
import Calendar from './views/Calendar';
import Reports from './views/Reports';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> }, // "/dashboard"
      { path: 'surveys', element: <Surveys /> },     // "/surveys"
      { path: 'team', element: <Team /> },           // "/team"
      { path: 'projects', element: <Projects /> },   // "/projects"
      { path: 'calendar', element: <Calendar /> },   // "/calendar"
      { path: 'reports', element: <Reports /> },     // "/reports"
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;
