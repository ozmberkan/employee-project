import Logo from "../images/ae.png";
import darkLogo from "../images/aeDark.png";
import { HiBell, HiUsers } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { BiSolidTime, BiUser } from "react-icons/bi";
import { tableTitle, iTypeTitle, defaultUser } from "../data/data";

const Home = ({ theme }) => {
  return (
    <div className="p-6 w-full h-screen flex flex-col gap-y-5 dark:bg-black ">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col justify-start gap-y-1 ">
          <h1 className="text-2xl font-bold dark:text-[#f1f1f1]">
            Hoş geldin!
          </h1>
          <span className="text-sm flex items-center gap-x-1 dark:text-[#f1f1f1]">
            <BiUser /> {defaultUser.fullName}
          </span>
        </div>
        {theme ? (
          <img
            src={darkLogo}
            alt="logo"
            className=" w-[250px] h-[50px]  object-cover"
          />
        ) : (
          <img
            src={Logo}
            alt="logo"
            className=" w-[250px] h-[50px]  object-cover"
          />
        )}
      </div>
      <div id="area" className="grid grid-cols-6 grid-rows-3 gap-6 h-full ">
        <div className="rounded-md flex flex-col gap-y-3 p-6 col-span-2 bg-white dark:bg-[#141414] dark:ring-offset-transparent dark:ring-offset-1 dark:ring-1 border  ring-2 ring-offset-4 ring-sky-500/30 border-zinc-400/50">
          <h1 className="text-2xl font-base flex gap-x-2 items-center dark:text-[#f1f1f1]">
            <HiUsers />
            Toplam Personel Sayısı
          </h1>
          <span className="text-xl font-base text-zinc-500 dark:text-zinc-400">
            0 adet personel bulunmaktadır.
          </span>
        </div>
        <div className="rounded-md flex flex-col gap-y-3 p-6 col-span-2 col-start-3 bg-white dark:bg-[#141414] dark:ring-offset-transparent dark:ring-offset-1 dark:ring-1 border  ring-2 ring-offset-4 ring-violet-500/30 border-zinc-400/50">
          <h1 className="text-2xl font-base flex gap-x-2 items-center dark:text-[#f1f1f1]">
            <MdWork />
            Personel Sigorta Tipi Adetleri
          </h1>
          <div className="flex flex-col space-y-1">
            <div className="flex w-full gap-2 ">
              {iTypeTitle.map((iTypeItem) => (
                <span
                  key={iTypeItem.title}
                  className="bg-[#f9f9f9] dark:bg-black dark:border-zinc-300/25 dark:text-[#f1f1f1] text-gray-700 p-3 rounded border border-gray-300 w-full flex justify-center items-center shadow-sm"
                >
                  {iTypeItem.title}
                </span>
              ))}
            </div>
            <div className="flex w-full gap-2">
              {[1, 2, 3].map((number) => (
                <span
                  key={number}
                  className=" text-gray-700 dark:bg-black dark:border-zinc-300/25 dark:text-[#f1f1f1] p-3 rounded border border-gray-300 w-full flex justify-center items-center shadow-sm"
                >
                  {number}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-md flex flex-col gap-y-3 p-6 col-span-2 col-start-5 bg-white dark:bg-[#141414] dark:ring-offset-transparent dark:ring-offset-1 dark:ring-1 border ring-2 ring-offset-4 ring-orange-500/30 border-zinc-400/50">
          <h1 className="text-2xl font-base flex items-center gap-x-2 dark:text-[#f1f1f1]">
            <HiBell />
            Bildirimler
          </h1>
          <span className="text-zinc-500 text-xl dark:text-zinc-400">
            Bildiriminiz bulunmamaktadır.
          </span>
        </div>
        <div className="w-full col-span-4 row-span-2 row-start-2 row-end-3  bg-cover rounded-xl border bg-white dark:bg-[#141414] dark:ring-1  ring-2 ring-offset-4 gap-y-3 ring-green-500/30  dark:ring-offset-0 dark:ring-offset-transparent  p-6 flex flex-col ">
          <h1 className="text-2xl font-base flex gap-x-2 items-center dark:text-[#f1f1f1]">
            <BiSolidTime />
            En son eklenen 5 personel
          </h1>
          <div className="w-full border-b grid grid-cols-7 h-12 mt-6 bg-[#f9f9f9] dark:bg-[#111111] dark:text-[#f1f1f1] px-5">
            {tableTitle.map((tableItem, i) => (
              <span
                key={i}
                className="w-full  flex justify-start items-center font-bold "
              >
                {tableItem.title}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full col-span-2 row-span-2 col-start-5 row-start-2 row-end-3 max-h-full bg-white dark:bg-[#141414]  dark:ring-1 bg-cover rounded-xl border  ring-2 ring-offset-4 gap-y-3 ring-black/30  dark:ring-offset-0 dark:ring-offset-transparent  p-6 flex flex-col">
          <h1 className="text-2xl font-base flex gap-x-2 items-center dark:text-[#f1f1f1]">
            <BiSolidTime />
            Toplantılarınız
          </h1>
          <span className="text-zinc-500 text-xl dark:text-[#f1f1f1]">
            Toplantınız bulunmamaktadır.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;