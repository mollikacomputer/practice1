import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Covarage from "../pages/Covarage/Covarage";
import PrivateRoute from "../Routes/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      {
        path: "covarage",
        Component: Covarage,
        loader: () => fetch("./warehouses.json"),
      },
      {
        path: "sendparcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);
