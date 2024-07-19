import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async (e) => {
    e.preventDefault();
    try {
      toast.success("Giriş Başarılı");
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      toast.error("Bilgileri lütfen doldurunuz...");
    }
  };

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12 ">
      <Toaster />
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-between items-center px-1">
        Giriş Yap!
        <span className="text-[14px] font-normal text-zinc-400">
          Employee Database v1.3
        </span>
      </h1>
      <form
        className="w-2/3 border bg-white grid grid-cols-1 gap-10 p-12 rounded"
        onSubmit={loginHandle}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">E-Posta</label>
          <input
            type="text"
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

        <div className="flex justify-start items-center gap-x-5">
          <button className="row-span-2  w-[100px] bg-[#202020] text-white h-[50px] rounded">
            Giriş Yap
          </button>
          <Link
            to="/register"
            className="w-[250px] whitespace-nowrap bg-[#609d3a] text-white h-[50px] rounded flex justify-center items-center"
          >
            Hesabın yok mu? Kayıt ol
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
