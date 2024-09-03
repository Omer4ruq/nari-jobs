import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/components/pages/home/Home";
import Login from "@/components/auth/Login";
import SignUp from "@/components/auth/SignUp";
import CreateJob from "@/components/pages/CreateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/job-post",
        element: <CreateJob></CreateJob>,
      },
    ],
  },
]);

export default router;
