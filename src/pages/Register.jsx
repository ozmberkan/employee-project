import { MdMail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../images/ae.png";
import darkLogo from "../images/aeDark.png";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "~/firebase";
import { FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const Register = () => {
  const { theme } = useSelector((store) => store.theme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Başarıyla kayıt oluşturuldu!");
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
      });
    } catch (error) {
      toast.error("Girilen Bilgiler Yanlış Lütfen Kontrol Ediniz.");
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
          <h1 className="text-2xl">Kayıt Ol</h1>
          <p
            className={`text-sm  ${
              theme ? "text-zinc-600" : "text-zinc-800/50"
            }`}
          >
            Lütfen bilgilerin ile sisteme kayıt ol!
          </p>
        </div>
        <form className="flex flex-col gap-y-5" onSubmit={registerUser}>
          <div
            className={`w-full h-full flex items-center  px-4 rounded  border ${
              theme ? "bg-[#141414] text-[#f1f1f1]" : "bg-white"
            }`}
          >
            <input
              type="text"
              className="w-full py-2 bg-transparent outline-none focus:border-black transition-colors duration-500"
              placeholder="İsim Soyisim"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="text-zinc-700 px-2">
              <FaUser size={25} />
            </span>
          </div>
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
            <Link to="/login" className="text-sm underline">
              Hesabın var mı ? giriş yap
            </Link>
          </div>
          <div className="w-full flex justify-center items-center ">
            <button
              className={`w-full px-4 py-2 border rounded  hover:border-black/60 transition-all duration-500 ${
                theme
                  ? "border-[#f1f1f1] text-[#f1f1f1] hover:border-zinc-500"
                  : "border-black text-black"
              }`}
            >
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
