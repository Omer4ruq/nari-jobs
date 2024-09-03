import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Route, RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { Toaster } from "sonner";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
