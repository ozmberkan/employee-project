import React, { useState } from "react";
import { Data } from "./data/Data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState(Data);

  return (
    <Router>
      <div className="flex items-start justify-start gap-x-5 font-manrope">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List data={data} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
