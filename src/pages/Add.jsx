import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Add = (props) => {
  const { setData, data } = props;
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    surname: "",
    bdate: "",
    itype: "",
    job: "",
    dlicense: "",
  });

  const addNewEmployee = (e) => {
    e.preventDefault();
    if (
      newEmployee.name === "" ||
      newEmployee.surname === "" ||
      newEmployee.bdate === "" ||
      newEmployee.itype === "" ||
      newEmployee.job === "" ||
      newEmployee.dlicense === ""
    ) {
      toast.error("Tüm alanları doldurmak zorundasınız...");
    } else {
      const updatedUser = [...data, { ...newEmployee, id: nanoid() }];
      setData(updatedUser);
      localStorage.setItem("employee", JSON.stringify(updatedUser));
      setNewEmployee({
        id: "",
        name: "",
        surname: "",
        bdate: "",
        itype: "",
        job: "",
        dlicense: "",
      });
      toast.success("Personel başarıyla veritabanına eklendi.");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  return (
    <div className="p-7 w-full flex flex-col gap-y-12 px-12">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-start flex-col items-start px-1 gap-y-2">
        Personel Kayıt
        <span className="text-base font-normal text-zinc-400">
          Lütfen bilgileri eksiksiz doldurunuz.
        </span>
      </h1>

      <form
        className="w-2/3 border bg-white grid grid-cols-2 gap-10 p-12 rounded"
        onSubmit={addNewEmployee}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">İsim</label>
          <input
            type="text"
            placeholder="İsim Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
            name="name"
            onChange={handleChange}
            value={newEmployee.name}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Soy isim</label>
          <input
            type="text"
            placeholder="Soy isim Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
            name="surname"
            onChange={handleChange}
            value={newEmployee.surname}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Doğum Tarihi</label>
          <input
            type="date"
            placeholder="Yaş Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
            name="bdate"
            onChange={handleChange}
            value={newEmployee.bdate}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Sigorta Türü</label>
          <select
            type="text"
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
            name="itype"
            onChange={handleChange}
            value={newEmployee.itype}
          >
            <option value="">Sigorta Türü Seçiniz...</option>
            <option value="4A">4A</option>
            <option value="4B">4B</option>
            <option value="4C">4C</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Meslek</label>
          <select
            type="text"
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
            name="job"
            onChange={handleChange}
            value={newEmployee.job}
          >
            <option value="">Meslek Seçiniz...</option>
            <option value="Doktor">Doktor</option>
            <option value="Mühendis">Mühendis</option>
            <option value="Öğretmen">Öğretmen</option>
            <option value="Avukat">Avukat</option>
            <option value="Polis">Polis</option>
            <option value="Asker">Asker</option>
            <option value="Mimar">Mimar</option>
            <option value="Eczacı">Eczacı</option>
            <option value="Hemşire">Hemşire</option>
            <option value="Diş Hekimi">Diş Hekimi</option>
            <option value="Pilot">Pilot</option>
            <option value="İtfaiyeci">İtfaiyeci</option>
            <option value="Gazeteci">Gazeteci</option>
            <option value="Yazılımcı">Yazılımcı</option>
            <option value="Şoför">Şoför</option>
            <option value="Çiftçi">Çiftçi</option>
            <option value="Kuaför">Kuaför</option>
            <option value="Tezgahtar">Tezgahtar</option>
            <option value="Resepsiyonist">Resepsiyonist</option>
            <option value="Sanatçı">Sanatçı</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Sürücü Ehliyeti</label>
          <select
            type="text"
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3]"
            name="dlicense"
            onChange={handleChange}
            value={newEmployee.dlicense}
          >
            <option value="">Sürücü Belgesi Seçiniz...</option>
            <option value="Var">Var</option>
            <option value="Yok">Yok</option>
          </select>
        </div>
        <button className="row-span-2 w-[100px] bg-[#202020] text-white h-[50px] rounded">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default Add;
