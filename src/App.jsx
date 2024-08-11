import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Container from "./containers/Container";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Add from "./pages/Add";
import List from "./pages/List";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const Layout = () => {
    return (
      <Container>
        <Navbar />
        <Outlet />
      </Container>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home theme={theme} />,
        },
        {
          path: "/settings",
          element: <Settings theme={theme} setTheme={setTheme} />,
        },
        {
          path: "/add",
          element: <Add theme={theme} />,
        },
        {
          path: "/list",
          element: <List theme={theme} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login theme={theme} />,
    },
    {
      path: "/register",
      element: <Register theme={theme} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
