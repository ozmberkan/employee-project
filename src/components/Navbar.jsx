import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={`border-r flex flex-col items-center gap-y-5 py-6 h-screen min-w-[100px] bg-white transition-all duration-500`}
    >
      <Link
        to="/"
        className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
      >
        <span className=" text-2xl">
          <FiHome />
        </span>
      </Link>
      <Link
        to="/add"
        className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
      >
        <span className=" text-2xl">
          <MdPersonAdd />
        </span>
      </Link>
      <Link
        to="/list"
        className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
      >
        <span className="  text-2xl">
          <BsPersonLinesFill />
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
