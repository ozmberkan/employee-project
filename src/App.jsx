import React, { useEffect, useState } from "react";
import { Data } from "./data/Data";
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
import { auth } from "./firebase";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Settings from "./pages/Settings";

const App = () => {
  const [data, setData] = useState(Data);
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employee")) || [];
    setData(storedData);
  }, [setData]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
          element: user ? (
            <Home user={user} data={data} setData={setData} />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/add",
          element: user ? (
            <Add data={data} setData={setData} />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/list",
          element: user ? (
            <List data={data} setData={setData} />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/settings",
          element: user ? <Settings /> : <Navigate to="/login" />,
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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
