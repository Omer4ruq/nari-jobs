import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Route, RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
  <Toaster></Toaster>
);
