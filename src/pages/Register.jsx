import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandle = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(
        "Kayıt İşlemi Başarıyla Tamamlandı! Yönlendiriliyorsunuz..."
      );
    } catch (error) {
      toast.error("Bir hata mevcut, sistem yöneticisi ile iletişime geçin!");
    }
  };

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12 h-screen dark:bg-black transition-all duration-500">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-between items-center px-1">
        Kayıt Ol!
        <span className="text-[14px] font-normal text-zinc-400">
          Employee Database v1.3
        </span>
      </h1>
      <form
        className="w-2/3 border bg-white dark:bg-zinc-700 dark:text-white grid grid-cols-2 gap-10 p-12 rounded"
        onSubmit={registerHandle}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">E-Posta</label>
          <input
            type="email"
            placeholder="E-posta Giriniz..."
            className="px-4 py-3 border rounded dark:bg-transparent outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
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
            className="px-4 py-3 border rounded dark:bg-transparent outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          />
        </div>

        <div className="flex justify-start items-center gap-x-5">
          <button className="row-span-2  w-[100px] bg-[#202020] text-white h-[50px] rounded">
            Kayıt Ol
          </button>
          <Link
            to="/login"
            className="w-[250px] whitespace-nowrap bg-[#609d3a] text-white h-[50px] rounded flex justify-center items-center"
          >
            Hesabın var mı? Giriş yap
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
