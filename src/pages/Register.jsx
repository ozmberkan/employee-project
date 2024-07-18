import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandle = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Kayıt Başarılı");
    } catch (error) {
      console.log("Hata Mevcut");
    }
  };

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12 ">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-between items-center px-1">
        Kayıt Ol!
        <span className="text-[14px] font-normal text-zinc-400">
          Employee Database v1.2
        </span>
      </h1>
      <form
        className="w-2/3 border bg-white grid grid-cols-2 gap-10 p-12 rounded"
        onSubmit={registerHandle}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">E-Posta</label>
          <input
            type="email"
            placeholder="E-posta Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Parola</label>
          <input
            type="password"
            value={password}
            placeholder="Parola Giriniz..."
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          />
        </div>

        <button className="row-span-2  w-[100px] bg-[#202020] text-white h-[50px] rounded">
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};

export default Register;
