import React, { useState } from "react";
import { GoHomeFill, GoSignOut } from "react-icons/go";

import { BsPersonLinesFill } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      toast.success("Çıkış başarılı");
    } catch {
      alert("Bir takım hata mevcut kodları kontrol edin.");
    }
  };

  return (
    <div
      className={`border-r flex h-screen flex-col justify-between items-center gap-y-5 py-6  min-w-[100px] bg-white dark:bg-[#131313] dark:border-[#272727] transition-all duration-500`}
    >
      <div className="flex flex-col gap-y-5">
        <Link
          to="/"
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 dark:hover:bg-[#0e0e0e] dark:hover:text-[#fff] rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className=" text-2xl">
            <GoHomeFill />
          </span>
        </Link>
        <Link
          to="/add"
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 dark:hover:bg-[#0e0e0e] dark:hover:text-[#fff] rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className=" text-2xl">
            <MdPersonAdd />
          </span>
        </Link>
        <Link
          to="/list"
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 dark:hover:bg-[#0e0e0e] dark:hover:text-[#fff] rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className="  text-2xl">
            <BsPersonLinesFill />
          </span>
        </Link>

        <div
          onClick={handleLogOut}
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className="  text-2xl">
            <GoSignOut />
          </span>
        </div>
      </div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <Link
          to="/settings"
          className={`text-zinc-400 flex gap-x-2  p-3 hover:bg-zinc-200/50 dark:hover:bg-[#0e0e0e] dark:hover:text-[#fff] rounded-md transition-all duration-1000 cursor-pointer hover:text-[#141414]`}
        >
          <span className="  text-2xl">
            <IoMdSettings />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
