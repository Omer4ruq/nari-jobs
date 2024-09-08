import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/components/pages/home/Home";
import Login from "@/components/auth/Login";
import SignUp from "@/components/auth/SignUp";
import CreateJob from "@/components/pages/CreateJob";
import MyJobs from "@/components/pages/myJobs";
import UpdateJobs from "@/components/pages/UpdateJobs";
import JobDetailsPage from "@/components/pages/JobDetailsPage";

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
      {
        path: "/jobs",
        element: <MyJobs></MyJobs>,
      },
      // {
      //   path: "/edit-job",
      //   element: <UpdateJob></UpdateJob>,
      // },
      {
        path: "jobs/edit-job/:id",
        element: <UpdateJobs></UpdateJobs>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
      {
        path: "apply-job/:id",
        element: <JobDetailsPage></JobDetailsPage>,
      },
    ],
  },
]);

export default router;
