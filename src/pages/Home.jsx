import React from "react";
import { HiUsers } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { BiBell, BiSolidTime } from "react-icons/bi";
import { Updates } from "../data/Data";
import { useSelector } from "react-redux";

const Home = () => {
  const { users } = useSelector((store) => store.users);
  const reversedData = [...users].reverse();
  const totalEmployee = users.length;

  const count4A = users.filter((type) => type.itype === "4A").length;
  const count4B = users.filter((type) => type.itype === "4B").length;
  const count4C = users.filter((type) => type.itype === "4C").length;

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12 dark:bg-[#000000] h-screen ">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-white flex justify-between items-center px-1">
        Hoş geldin
        <span className="text-[14px] font-normal text-zinc-400">
          Employee Database v1.3
        </span>
      </h1>
      <div className="w-full grid grid-cols-3 gap-10 dark:text-white">
        <div className="rounded-xl bg-white dark:bg-[#1c1c1c]  border p-6 flex flex-col gap-y-3 ring-2 ring-offset-4 dark:ring-offset-0  dark:ring-offset-transparent  row-span-4 ring-sky-800-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold flex gap-x-2 items-center">
            <HiUsers />
            Toplam Personel Sayısı
          </h1>
          <span className="text-lg font-medium text-zinc-500">
            <span className="font-black">{totalEmployee}</span> adet personel
            bulunmaktadır.
          </span>
        </div>
        <div className="rounded-xl bg-white dark:bg-[#1c1c1c] border p-6 flex flex-col gap-y-2 ring-2 ring-offset-4  dark:ring-offset-0  dark:ring-offset-transparent  row-span-4 ring-violet-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold flex gap-x-2 items-center">
            <MdWork />
            Personel Sigorta Tipi Sayıları
          </h1>
          <div className="flex gap-x-3">
            <span className="font-medium text-zinc-500">4A:{count4A}</span>
            <span className="font-medium text-zinc-500">4B:{count4B}</span>
            <span className="font-medium text-zinc-500">4C:{count4C}</span>
          </div>
        </div>
        <div className="rounded-xl bg-white border dark:bg-[#1c1c1c] p-6 flex flex-col gap-y-2 ring-2 ring-offset-4  dark:ring-offset-0  dark:ring-offset-transparent  row-span-4 ring-orange-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold flex items-center gap-x-2">
            <BiBell />
            Bildirimler
          </h1>
          {Updates.map((update, i) => (
            <span className="text-zinc-500" key={i}>{`• ${update.title}`}</span>
          ))}
        </div>
        <div className="w-full  bg-cover rounded-xl border dark:bg-[#1c1c1c] ring-2 ring-offset-4 gap-y-3 ring-green-500/70  dark:ring-offset-0 dark:ring-offset-transparent  p-6 flex flex-col row-span-12 col-span-2 ">
          <h1 className="text-2xl font-semibold flex gap-x-2 items-center">
            <BiSolidTime />
            En son eklenen 5 personel
          </h1>
          <div className="w-full flex flex-col justify-between items-start gap-y-2">
            <div className="w-full border-b grid grid-cols-7 h-12 mt-6 bg-zinc-100 dark:bg-[#282828]  px-5">
              <span className="w-full  flex justify-start items-center font-bold ">
                Sicil No
              </span>
              <span className="w-full  flex justify-start items-center font-bold ">
                Ad
              </span>
              <span className="w-full  flex justify-start items-center font-bold ">
                Soyad
              </span>
              <span className="w-full  flex justify-start items-center font-bold ">
                Doğum Tarihi
              </span>
              <span className="w-full  flex justify-start items-center font-bold ">
                Sigorta Tipi
              </span>
              <span className="w-full  flex justify-start items-center font-bold ">
                Meslek
              </span>
              <span className="w-full  flex justify-start items-center font-bold ">
                Sürücü Belgesi
              </span>
            </div>
            {reversedData.length > 0 ? (
              reversedData.map((user) => (
                <div
                  key={user.id}
                  className="w-full border-b grid grid-cols-7 h-16  dark:hover:bg-[#131212] hover:bg-zinc-100 px-5 mt-3"
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
                </div>
              ))
            ) : (
              <span className="text-lg mt-2 px-4 text-zinc-500">
                Verilerimizde herhangi bir personel bulunmamaktadır.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
