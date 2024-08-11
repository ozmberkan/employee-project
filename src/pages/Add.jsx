import Logo from "../images/ae.png";
import darkLogo from "../images/aeDark.png";
import { addInputField } from "../data/data";

const Add = ({ theme }) => {
  return (
    <div className="p-6 w-full h-screen flex flex-col gap-y-2 dark:bg-black">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col justify-start gap-y-1 ">
          <h1 className="text-2xl font-bold dark:text-[#f1f1f1]">
            Personel Kayıt
          </h1>
          <span className="text-sm flex items-center gap-x-1 text-zinc-700/60 dark:text-zinc-600">
            Buradan personel kayıt işlemlerini gerçekleştirebilirsin.
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
      <form className="bg-white rounded p-6 w-1/2 border grid grid-cols-2 gap-5 dark:bg-[#141414] dark:border-zinc-600/25">
        {addInputField.map((input) => (
          <div className="flex flex-col gap-y-1" key={input.name}>
            <label className="dark:text-[#f1f1f1]">{input.label}</label>
            {input.type === "text" ||
            input.type === "number" ||
            input.type === "date" ? (
              <input
                type={input.type}
                placeholder={input.placeholder}
                className="border px-4 py-2 rounded dark:bg-zinc-800/15 dark:border-zinc-600/25 dark:text-[#f1f1f1]"
                name={input.name}
              />
            ) : input.type === "select" ? (
              <select
                className="border px-4 py-2 rounded dark:bg-zinc-800/15 dark:border-zinc-600/25 dark:text-[#f1f1f1]"
                name={input.name}
              >
                {input.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        ))}
        <button className="border col-start-1 col-end-3 px-4 py-2 rounded mt-5 border-black dark:bg-zinc-800/15 dark:text-[#f1f1f1] dark:border-zinc-600/25">
          Kaydı Tamamla
        </button>
      </form>
    </div>
  );
};

export default Add;
