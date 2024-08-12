import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Container from "./containers/Container";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Settings from "./pages/Settings";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  const [user, setUser] = useState(null);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

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
      element: user ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <Home user={user} />,
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
      element: user ? <Navigate to="/" /> : <Login theme={theme} />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register theme={theme} />,
    },
    {
      path: "/forgot-password",
      element: user ? <Navigate to="/" /> : <ForgotPassword theme={theme} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
