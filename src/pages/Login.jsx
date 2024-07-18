import React from "react";

const Login = () => {
  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12 ">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-between items-center px-1">
        Giriş Yap!
        <span className="text-[14px] font-normal text-zinc-400">
          Employee Database v1.2
        </span>
      </h1>
      <form className="w-2/3 border bg-white grid grid-cols-2 gap-10 p-12 rounded">
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">E-Posta</label>
          <input
            type="text"
            placeholder="E-posta Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Parola</label>
          <input
            type="password"
            placeholder="Parola Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          />
        </div>

        <button className="row-span-2  w-[100px] bg-[#202020] text-white h-[50px] rounded">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
