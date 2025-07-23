import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/Surveys',
    element: <Surveys />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Signup',
    element: <Signup />,
  },
]);

export default router;
