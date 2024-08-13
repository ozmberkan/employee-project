import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Container from "./containers/Container";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { theme } = useSelector((store) => store.theme);
  const [user, setUser] = useState(null);

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
        <ToastContainer />
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
          element: <Settings />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/list",
          element: <List />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/forgot-password",
      element: user ? <Navigate to="/" /> : <ForgotPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
