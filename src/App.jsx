import React, { useEffect, useState } from "react";
import { Data } from "./data/Data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () => {
  const [data, setData] = useState(Data);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employee")) || [];
    setData(storedData);
  }, [setData]);

  return (
    <Router>
      <div className="flex items-start justify-start gap-x-5 font-manrope">
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={<Home data={data} setData={setData} />}
          />
          <Route path="/add" element={<Add setData={setData} data={data} />} />
          <Route
            path="/list"
            element={<List data={data} setData={setData} />}
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
