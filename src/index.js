import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login/login"
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";
import Settings from "./pages/setting/Settings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);
