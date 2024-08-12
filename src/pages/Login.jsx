import { useState } from "react";
import { MdMail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "~/firebase";
import Logo from "../images/ae.png";
import darkLogo from "../images/aeDark.png";
import { toast, ToastContainer } from "react-toastify";

const Login = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/");
      toast.success("Giriş Yapıldı. Yönlendiriliyorsunuz.");
    } catch (error) {
      toast.error("Girilen Bilgiler Yanlış Lütfen Kontrol Ediniz.");
    }
  };
  // GOOGLE
  const logInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      toast.error("Google ile giriş yapılırken bir hata oluştu.");
    }
  };

  return (
    <div
      className={`w-full h-screen flex justify-start items-center bg-[#f9f9f9] flex-col dark:bg-black ${
        theme ? "bg-black " : "bg-[#f9f9f9]"
      }`}
    >
      <ToastContainer />
      <div className="mt-24 mb-5 ">
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
      <div
        className={`w-[500px] ${
          theme ? "bg-[#141414]" : "bg-white"
        } rounded-md border flex flex-col p-6 gap-y-5`}
      >
        <div
          className={`flex justify-start items-start flex-col gap-y-1 ${
            theme ? "text-[#f1f1f1]" : "text-black"
          }`}
        >
          <h1 className="text-2xl">Giriş Yap</h1>
          <p
            className={`text-sm  ${
              theme ? "text-zinc-600" : "text-zinc-800/50"
            }`}
          >
            Lütfen bilgiler ile sisteme giriş yap!
          </p>
        </div>
        <form className="flex flex-col gap-y-5" onSubmit={signIn}>
          <div
            className={`w-full h-full flex items-center  px-4 rounded  border ${
              theme ? "bg-[#141414] text-[#f1f1f1]" : "bg-white"
            }`}
          >
            <input
              type="text"
              className="w-full py-2 bg-transparent outline-none focus:border-black transition-colors duration-500"
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-zinc-700 px-2">
              <MdMail size={25} />
            </span>
          </div>
          <div
            className={`w-full h-full flex items-center  px-4 rounded  border ${
              theme ? "bg-[#141414] text-[#f1f1f1]" : "bg-white"
            }`}
          >
            <input
              type="password"
              className="w-full py-2 bg-transparent outline-none focus:border-black transition-colors duration-500"
              placeholder="Parola"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-zinc-700 px-2">
              <IoIosLock size={25} />
            </span>
          </div>
          <div
            className={`w-full h-5 flex justify-between items-center ${
              theme ? "text-[#666666]" : "text-black"
            }`}
          >
            <Link to="/register" className="text-sm underline">
              Hesabın yok mu ? Kayıt ol
            </Link>
            <Link
              to="/forgot-password"
              className="text-sm underline cursor-pointer"
            >
              Şifreni mi unuttun?
            </Link>
          </div>
          <div className="w-full flex justify-center items-center ">
            <button
              type="submit"
              className={`w-full px-4 py-2 border rounded hover:bg-black hover:text-[#f1f1f1] transition-all duration-150  hover:border-black/60 ${
                theme
                  ? "border-[#f1f1f1] text-[#f1f1f1] hover:border-zinc-500"
                  : "border-black text-black"
              }`}
            >
              Giriş Yap
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={logInWithGoogle}
              type="button"
              className={`w-full px-4 py-2 border rounded hover:bg-black hover:text-[#f1f1f1] transition-all duration-150 border-black hover:border-black/60 flex justify-center items-center gap-x-2 ${
                theme
                  ? "border-[#f1f1f3] text-[#f1f1f1] hover:border-zinc-500"
                  : "border-black text-black"
              }`}
            >
              <FcGoogle size={25} />
              <span>Google ile giriş yap</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
