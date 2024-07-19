import React, { useEffect, useState } from "react";

const Settings = () => {
  const [checked, setChecked] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [checked]);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="p-7 flex flex-col  gap-y-12 px-12 dark:bg-[#141414] dark:text-white h-screen w-full  transition-all duration-500">
      <h1 className="text-4xl dark:text-white font-bold text-zinc-800 flex justify-between items-center px-1">
        Ayarlar
      </h1>
      <div className="flex flex-col gap-y-5">
        <div className="rounded-md w-[200px]  transition-all duration-500 bg-white dark:bg-[#303030] border p-6 inline-flex border-zinc-400/50">
          <label class="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              checked={checked}
              onChange={handleChecked}
            />
            <div class="relative w-11  h-6 bg-gray-200 peer-focus:outline-none  transition-all duration-500 peer-focus:ring-4 peer-focus:ring-black/5 dark:peer-focus:ring-zinc-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black/50"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {checked ? "Aydınlık Mod" : "Karanlık Mod"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
