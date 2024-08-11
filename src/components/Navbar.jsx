import React from "react";
import { icons } from "../data/data";
import { RiSettings2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[100px] min-w-[100px] bg-white h-screen flex justify-between items-start p-6 flex-col dark:bg-black dark:border-r border-r border-zinc-300/15 transition-all duration-500 ">
      <div className="flex flex-col justify-between gap-y-5 ">
        {icons.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="p-3 rounded-xl bg-[#f9f9f9] border dark:bg-[#141414] dark:border-zinc-500/15 dark:text-white  flex justify-center items-center hover:bg-[#f0f0f0] transition-colors duration-500 text-zinc-700/60"
          >
            <item.Icon size={23} />
          </Link>
        ))}
      </div>
      <div>
        <Link
          to="/settings"
          className="p-3 rounded-xl bg-[#f9f9f9] hover:bg-[#f0f0f0] dark:bg-[#141414] dark:border-zinc-500/15 dark:text-white border  flex justify-center items-center transition-colors duration-500"
        >
          <RiSettings2Fill size={23} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
