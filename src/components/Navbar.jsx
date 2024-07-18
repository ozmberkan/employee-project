import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";

import { BsPersonLinesFill } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <div
      className={`border-r flex h-screen flex-col justify-between items-center gap-y-5 py-6  min-w-[100px] bg-white transition-all duration-500`}
    >
      <div className="flex flex-col gap-y-5">
        <Link
          to="/home"
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className=" text-2xl">
            <GoHomeFill />
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
        <Link
          to="/"
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className="  text-2xl">
            <FiLogIn />
          </span>
        </Link>
      </div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <button
          onClick={() =>
            toast("Henüz ayarlar eklenmedi!", {
              icon: "⚙️",
            })
          }
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className="  text-2xl">
            <IoMdSettings />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
