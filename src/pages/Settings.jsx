import React from "react";
import { defaultUser } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "~/redux/slices/themeSlice";

const Settings = ({ user }) => {
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(setTheme(!theme));
  };

  return (
    <div className="p-6 w-full h-screen flex flex-col gap-y-2 dark:bg-black dark:text-[#f1f1f1] transition-all duration-500">
      <h1 className="text-2xl font-bold">Kişisel Ayarlar</h1>
      <p className="text-sm text-zinc-500">
        {`Merhaba, ${user.displayName} kişisel ayarlarını buradan gerçekleştirebilirsin`}
      </p>

      <label className="inline-flex items-center cursor-pointer bg-white dark:bg-[#141414]  w-[300px] rounded p-4">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleTheme}
          checked={theme}
        />
        <div className="relative w-11 h-6 bg-zinc-300  transition-all duration-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black/20 dark:peer-focus:ring-zinc-600/40  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white dark:peer-checked:after:border-zinc-700 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-black/70 dark:peer-checked:bg-zinc-600/70"></div>
        <span className="ms-3 text-sm font-normal text-gray-900 dark:text-white ">
          {theme ? "Aydınlık Moda Çevir" : "Karanlık Moda Çevir"}
        </span>
      </label>
    </div>
  );
};

export default Settings;
