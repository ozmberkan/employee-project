import React, { useEffect, useState } from "react";
import FlexContainer from "./container/FlexContainer";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { users } = useSelector((store) => store.users);

  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const Layout = () => {
    return (
      <FlexContainer>
        <Navbar />
        <Outlet />
      </FlexContainer>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/settings",
          element: <Settings checked={checked} setChecked={setChecked} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
