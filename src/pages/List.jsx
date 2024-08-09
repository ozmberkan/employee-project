import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, filteredUser } from "../redux/slices/userSlice";

const List = () => {
  const { users, filteredUsers } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(filteredUser(search));
  };

  const deleteEmpFunc = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12 h-screen dark:bg-[#000000] dark:text-white">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-start  flex-col items-start dark:text-white px-1 gap-y-2">
        Personel Listesi
        <span className="text-base font-normal text-zinc-400 ">
          Lütfen bilgileri KVKK gereği dikkatli kullanınız, paylaşmayınız.
        </span>
      </h1>
      <div className="w-full  px-4 py-5 rounded-md  dark:bg-[#1c1c1c] border dark:border-[#303030]">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Personel Listesi</h1>
          <div className="relative">
            <label className="absolute bottom-2 left-3">
              <IoIosSearch size={25} className="text-zinc-500" />
            </label>
            <input
              type="text"
              placeholder="Personel Ara..."
              onChange={handleSearch}
              value={search}
              className="pl-12 py-2 border rounded bg-[#F4F4F5]  outline-none placeholder:text-zinc-500 w-[600px] focus:ring-1 focus:ring-offset-2 ring-zinc-500 transition-all duration-500 dark:border-[#303030] dark:bg-[#272727] dark:placeholder:text-white dark:focus:border-[#303030] dark:focus:ring-black focus:ring-offset-zinc-700"
            />
          </div>
        </div>
        <div className="w-full border-b grid grid-cols-8 h-16 mt-6  px-5 bg-gray-100 dark:bg-[#282828]">
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Sicil No
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Ad
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Soyad
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Doğum Tarihi
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Sigorta Tipi
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Meslek
          </span>
          <span className="w-full  flex justify-start items-center font-bold text-xl">
            Sürücü Belgesi
          </span>
          <span className="w-20  flex justify-center items-center font-bold text-xl">
            Sil
          </span>
        </div>

        <div className="divide-y">
          {(filteredUsers.length > 0 ? filteredUsers : users).map((user) => (
            <div
              key={user.id}
              className="w-full  grid grid-cols-8 h-16  hover:bg-zinc-100 dark:hover:bg-[#131212] px-5"
            >
              <span className="w-full  flex justify-start items-center">
                {user.id.slice(0, 12)}
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
                {user.dlicense ? "Evet" : "Hayır"}
              </span>
              <button
                onClick={() => deleteEmpFunc(user.id)}
                className="w-20 flex justify-center items-center  hover:text-red-500 text-xl rounded transition-colors duration-300"
              >
                <MdOutlineDeleteOutline size={30} />
              </button>
            </div>
          ))}
          {filteredUsers.length === 0 && users.length === 0 && (
            <span className="text-lg px-4 text-zinc-500 w-full  grid mt-5">
              Verilerimizde herhangi bir personel bulunmamaktadır.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
