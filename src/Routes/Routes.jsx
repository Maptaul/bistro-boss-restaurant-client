import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import Cart from "../Pages/Dashboard/Dashboard/Cart/Cart";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Secret from "../Pages/Shared/Secret/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
