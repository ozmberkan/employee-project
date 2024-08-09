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
import { auth } from "./firebase";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser(firebaseUser));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

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
          element: user ? <Home user={user} /> : <Navigate to="/login" />,
        },
        {
          path: "/add",
          element: user ? <Add /> : <Navigate to="/login" />,
        },
        {
          path: "/list",
          element: user ? <List /> : <Navigate to="/login" />,
        },
        {
          path: "/settings",
          element: user ? (
            <Settings checked={checked} setChecked={setChecked} />
          ) : (
            <Navigate to="/login" />
          ),
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
