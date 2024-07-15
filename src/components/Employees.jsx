import React from "react";

const Employees = (props) => {
  const { data } = props;

  return (
    <div className="w-1/2 min-h-[400px] mt-6  p-6 rounded-xl bg-black flex flex-col gap-y-3">
      {data.map((emp) => (
        <div key={emp.id} className="grid grid-cols-6 gap-3 text-white">
          <span className="flex justify-center items-center px-4 py-2 bg-[#5e5e5e] rounded-md">
            {emp.id}
          </span>
          <span className="flex justify-center items-center px-4 py-2 bg-[#5e5e5e] rounded-md">
            {emp.name}
          </span>
          <span className="flex justify-center items-center px-4 py-2 bg-[#5e5e5e] rounded-md">
            {emp.surname}
          </span>
          <span className="flex justify-center items-center px-4 py-2 bg-[#5e5e5e] rounded-md">
            {emp.age}
          </span>
          <span className="flex justify-center items-center px-4 py-2 bg-[#5e5e5e] rounded-md">
            {emp.insuranceType}
          </span>
          <span className="flex justify-center items-center px-4 py-2 bg-[#5e5e5e] rounded-md">
            {emp.job}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Employees;
