import { useState } from "react";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "~/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Logo from "../images/ae.png";
import darkLogo from "../images/aeDark.png";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = ({ theme }) => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "Başarıyla şifre sıfırlama bağlantısı gönderildi, kısa bir süre içerisinde size ulaşacak!"
        );
      })
      .catch((error) => {
        toast.error(
          "Bir hata ile karşılaştık, lütfen bizimle iletişime geçiniz!"
        );
      });

    setEmail("");
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
          <h1 className="text-2xl">Şifremi Unuttum</h1>
          <p
            className={`text-sm  ${
              theme ? "text-zinc-600" : "text-zinc-800/50"
            }`}
          >
            Lütfen email girerek yeni şifreni belirle. Sana yeni bir bağlantı
            göndereceğiz.
          </p>
        </div>
        <form className="flex flex-col gap-y-5" onSubmit={handleReset}>
          <div
            className={`w-full h-full flex items-center  px-4 rounded  border ${
              theme ? "bg-[#141414] text-[#f1f1f1]" : "bg-white"
            }`}
          >
            <input
              type="email"
              value={email}
              className="w-full py-2 bg-transparent outline-none focus:border-black transition-colors duration-500"
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-zinc-700 px-2">
              <MdMail size={25} />
            </span>
          </div>
          <div
            className={`w-full h-1 flex justify-end items-center ${
              theme ? "text-[#666666]" : "text-black"
            }`}
          >
            <Link to="/login" className="text-sm underline">
              Giriş Sayfasına Geri Dön
            </Link>
          </div>
          <div className="w-full flex justify-center items-center ">
            <button
              type="submit"
              className={`w-full px-4 py-2 border rounded  hover:border-black/60 transition-all duration-500 ${
                theme
                  ? "border-[#f1f1f1] text-[#f1f1f1] hover:border-zinc-500"
                  : "border-black text-black"
              }`}
            >
              Yeni Şifreni Belirle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
