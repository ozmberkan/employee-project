import React from "react";

const Information = () => {
  return (
    <div className="w-1/2 bg-black flex flex-col justify-center items-center h-32 text-white  rounded-xl">
      <div className="w-full grid grid-cols-6 gap-3 px-6 ">
        <span className="flex justify-center items-center px-4 py-2 bg-[#303030] rounded-md">
          Sicil No
        </span>
        <span className="flex justify-center items-center px-4 py-2 bg-[#303030] rounded-md">
          İsim
        </span>
        <span className="flex justify-center items-center px-4 py-2 bg-[#303030] rounded-md">
          Soyisim
        </span>
        <span className="flex justify-center items-center px-4 py-2 bg-[#303030] rounded-md">
          Yaş
        </span>
        <span className="flex justify-center items-center px-4 py-2 bg-[#303030] rounded-md">
          Sigorta Tipi
        </span>
        <span className="flex justify-center items-center px-4 py-2 bg-[#303030] rounded-md">
          Meslek
        </span>
      </div>
    </div>
  );
};

export default Information;
