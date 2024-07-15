import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border-r flex flex-col items-center gap-y-5 py-6 h-screen w-[100px] bg-white transition-all duration-500 ${isHovered ? "bg-black" : "bg-orange-600" }`}
    >
      <div className="text-zinc-400 flex items-center gap-x-2 p-3 hover:bg-zinc-200/50 rounded-md cursor-pointer hover:text-[#141414]">
        <FiHome size={25} />
      </div>
      <div className="text-zinc-400 p-3 hover:bg-zinc-200/50 rounded-md cursor-pointer hover:text-[#141414]">
        <MdPersonAdd size={25} />
      </div>
      <div className="text-zinc-400 p-3 hover:bg-zinc-200/50 rounded-md cursor-pointer hover:text-[#141414]">
        <BsPersonLinesFill size={25} />
      </div>
    </div>
  );
};

export default Navbar;
