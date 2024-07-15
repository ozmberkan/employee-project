import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

const List = (props) => {
  const { data } = props;

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-start  flex-col items-start px-1 gap-y-2">
        Personel Listesi
        <span className="text-base font-normal text-zinc-400">
          Lütfen bilgileri KVKK gereği dikkatli kullanınız, paylaşmayınız.
        </span>
      </h1>
      <div className="w-full border px-4 py-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Personel Listesi</h1>
          <div className="relative">
            <label className="absolute bottom-2 left-3">
              <IoIosSearch size={25} className="text-zinc-500" />
            </label>
            <input
              type="text"
              placeholder="Personel Ara..."
              className="pl-12 py-2 border rounded bg-[#F4F4F5] outline-none placeholder:text-zinc-500 w-[600px] focus:ring-1 focus:ring-offset-2 ring-zinc-500 transition-all duration-500"
            />
          </div>
        </div>
        <div className="w-full border-b grid grid-cols-8 h-16 mt-6 hover:bg-zinc-100 px-5">
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            ID
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Name
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Surname
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            BDate
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            IType
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Job
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            DLicense
          </span>
          <span className="w-20  flex justify-center items-center font-bold text-xl">
            Sil
          </span>
        </div>

        {data.length > 0 ? (
          data.map((user) => (
            <div
              key={user.id}
              className="w-full border-b grid grid-cols-8 h-16  hover:bg-zinc-100 px-5"
            >
              <span className="w-full  flex justify-start items-center">
                {user.id}
              </span>
              <span className="w-full  flex justify-start items-center">
                {user.name}
              </span>
              <span className="w-full  flex justify-start items-center">
                {user.surname}
              </span>
              <span className="w-full  flex justify-start items-center">
                {user.bdate}
              </span>
              <span className="w-full  flex justify-start items-center">
                {user.itype}
              </span>
              <span className="w-full  flex justify-start items-center">
                {user.job}
              </span>
              <span className="w-full  flex justify-start items-center">
                {user.dlicense}
              </span>
              <button className="w-20 flex justify-center items-center  hover:text-red-500 text-xl rounded transition-colors duration-300 ">
                <MdOutlineDeleteOutline size={30} />
              </button>
            </div>
          ))
        ) : (
          <span className="text-lg px-4 text-zinc-500 w-full  grid mt-5 ">
            Verilerimizde herhangi bir personel bulunmamaktadır.
          </span>
        )}
      </div>
    </div>
  );
};

export default List;
