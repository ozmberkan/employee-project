import React from "react";
import { HiUsers } from "react-icons/hi2";
import { MdWork, MdOutlineUpdate } from "react-icons/md";
import { BiSolidTime } from "react-icons/bi";

const Home = (props) => {
  const { data, setData, user } = props;

  const reversedData = [...data].reverse();
  const totalEmployee = data.length;

  const count4A = data.filter((type) => type.itype === "4A").length;
  const count4B = data.filter((type) => type.itype === "4B").length;
  const count4C = data.filter((type) => type.itype === "4C").length;

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12 ">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-between items-center px-1">
        Hoş geldin
        <span className="text-[14px] font-normal text-zinc-400">
          Employee Database v1.2
        </span>
      </h1>
      <div className="w-full grid grid-cols-3 gap-10">
        <div className="rounded-xl bg-white border p-6 flex flex-col gap-y-3 ring-2 ring-offset-4  row-span-4 ring-sky-800-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold flex gap-x-2 items-center">
            <HiUsers />
            Toplam Personel Sayısı
          </h1>
          <span className="text-lg font-medium text-zinc-500">
            <span className="font-black">{totalEmployee}</span> adet personel
            bulunmaktadır.
          </span>
        </div>
        <div className="rounded-xl bg-white border p-6 flex flex-col gap-y-2 ring-2 ring-offset-4  row-span-4 ring-violet-500/70 border-zinc-400/50">
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
        <div className="rounded-xl bg-white border p-6 flex flex-col gap-y-2 ring-2 ring-offset-4  row-span-4 ring-orange-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold flex items-center gap-x-2">
            <MdOutlineUpdate />
            Güncellemeler
          </h1>
          <span className="font-medium text-zinc-500">
            Login / Register eklendi
          </span>
          <span className="font-medium text-zinc-500">
            Login Validasyon Eklendi
          </span>
        </div>
        <div className="w-full  bg-cover rounded-xl border ring-2 ring-offset-4 gap-y-3 ring-green-500/70 p-6 flex flex-col row-span-12 col-span-2 ">
          <h1 className="text-2xl font-semibold flex gap-x-2 items-center">
            <BiSolidTime />
            En son eklenen 5 personel
          </h1>
          <div className="w-full flex flex-col justify-between items-start gap-y-2">
            <div className="w-full border-b grid grid-cols-7 h-12 mt-6 hover:bg-zinc-100 px-5">
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
                  className="w-full border-b grid grid-cols-7 h-16  hover:bg-zinc-100 px-5 mt-3"
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
