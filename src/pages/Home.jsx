import React from "react";

const Home = () => {
  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-between items-center px-1">
        Hoş geldin!
        <span className="text-base font-normal text-zinc-400">
          EmployeeDatabase
        </span>
      </h1>
      <div className="w-full h-[300px] grid grid-cols-3 grid-rows-5 gap-10">
        <div className="rounded-xl bg-white border p-6 flex flex-col gap-y-2 ring-2 ring-offset-4  row-span-4 ring-sky-800-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold">Toplam Personel Sayısı</h1>
          <span>${"Sayı"}</span>
        </div>
        <div className="rounded-xl bg-white border p-6 flex flex-col gap-y-2 ring-2 ring-offset-4  row-span-4 ring-violet-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold">Personel Tipi Sayıları</h1>
          <span>${"Sayı"}</span>
        </div>
        <div className="rounded-xl bg-white border p-6 flex flex-col gap-y-2 ring-2 ring-offset-4  row-span-4 ring-orange-500/70 border-zinc-400/50">
          <h1 className="text-2xl font-semibold">Güncellemeler</h1>
          <span>${"Sayı"}</span>
        </div>
        <div className="w-full h-[400px] bg-cover rounded-xl border ring-2 ring-offset-4 gap-y-3 ring-green-500/70 p-6 flex flex-col col-span-2">
          <h1 className="text-2xl font-semibold">En son eklenen 10 personel</h1>
          <div className="w-full min-h-[300px]  flex flex-col justify-between items-start">
            <div className="">1-Berkan Özmen</div>
            <div className="">2-Berkan Özmen</div>
            <div className="">3-Berkan Özmen</div>
            <div className="">4-Berkan Özmen</div>
            <div className="">5-Berkan Özmen</div>
            <div className="">6-Berkan Özmen</div>
            <div className="">7-Berkan Özmen</div>
            <div className="">8-Berkan Özmen</div>
            <div className="">9-Berkan Özmen</div>
            <div className="">10- Berkan Özmen</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
