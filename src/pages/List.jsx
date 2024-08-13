import Logo from "../images/ae.png";
import darkLogo from "../images/aeDark.png";
import { listTitle, exampleData } from "../data/data";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";

const List = () => {
  const { theme } = useSelector((store) => store.theme);
  const { list } = useSelector((store) => store.list);

  return (
    <div className="p-6 w-full h-screen flex flex-col gap-y-2 dark:bg-black">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col justify-start gap-y-1 ">
          <h1 className="text-2xl font-bold dark:text-[#f1f1f1]">
            Personel Listesi
          </h1>
          <span className="text-sm flex items-center gap-x-1 text-zinc-700/60 dark:text-zinc-600">
            Buradan personel listeleme işlemlerini gerçekleştirebilirsin.
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
      <div className="p-5 rounded-md mt-5 bg-white w-full border dark:bg-[#141414] dark:border-zinc-600/25">
        <table className="w-full flex flex-col gap-y-2">
          <thead className="w-full border-b grid grid-cols-9 bg-[#f9f9f9] ">
            {listTitle.map((listItem, i) => (
              <span
                key={i}
                className="w-full font-normal flex justify-center items-center  bg-zinc-100 dark:bg-[#111111] dark:text-[#f1f1f1] py-3 "
              >
                {listItem.title}
              </span>
            ))}
          </thead>
          <tbody>
            {list.map((user, i) => (
              <tr key={i} className="grid grid-cols-9 py-2  rounded gap-x-4">
                {Object.values(user).map((value, i) => (
                  <td
                    key={i}
                    className="flex justify-center dark:text-[#f1f1f1]"
                  >
                    {value}
                  </td>
                ))}
                <td className="flex gap-x-2 justify-center">
                  <button className="p-2 bg-red-300 text-red-700 flex justify-center items-center rounded-md">
                    <BiTrash size={18} />
                  </button>
                  <button className="p-2 bg-blue-600 text-white flex justify-center items-center rounded-md">
                    <BiEdit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
