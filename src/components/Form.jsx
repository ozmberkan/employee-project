import React, { useState } from "react";

const Form = (props) => {
  const { data, setData } = props;

  const [newEmp, setNewEmp] = useState({
    id: "",
    name: "",
    surname: "",
    age: "",
    insuranceType: "",
    job: "",
  });

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setNewEmp({ ...newEmp, [name]: value });
  };

  const addNewEmp = (e) => {
    e.preventDefault();
    setData([...data, newEmp]);
    setNewEmp({
      id: "",
      name: "",
      surname: "",
      age: "",
      insuranceType: "",
      job: "",
    });
  };

  return (
    <div className="w-1/2 mt-6 p-12 min-h-[400px] rounded-xl bg-black flex flex-col gap-y-3">
      <div className="mb-7 flex flex-col gap-y-2 text-white">
        <h1 className="font-bold text-2xl">Başlık</h1>
        <span className="font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam animi
          fugiat perspiciatis maxime fuga voluptates.
        </span>
      </div>
      <form className="grid grid-cols-3  gap-7 rounded-xl">
        <input
          type="text"
          name="id"
          className="py-2.5 px-4  outline-none text-white placeholder:text-white bg-black border rounded-xl "
          placeholder="Sicil No Giriniz..."
          onChange={changeHandle}
          value={newEmp.id}
        />
        <input
          type="text"
          name="name"
          className="py-2.5 px-4  outline-none text-white placeholder:text-white bg-black border rounded-xl "
          placeholder="İsim Giriniz..."
          onChange={changeHandle}
          value={newEmp.name}
        />
        <input
          type="text"
          name="surname"
          className="py-2.5 px-4  outline-none text-white placeholder:text-white bg-black border rounded-xl "
          placeholder="Soyisim Giriniz..."
          onChange={changeHandle}
          value={newEmp.surname}
        />
        <input
          type="number"
          name="age"
          className="py-2.5 px-4  outline-none text-white placeholder:text-white bg-black border rounded-xl "
          placeholder="Yaş Giriniz..."
          onChange={changeHandle}
          value={newEmp.age}
        />
        <select
          name="insuranceType"
          onChange={changeHandle}
          value={newEmp.insuranceType}
          className="py-2.5 px-3  outline-none text-white placeholder:text-white bg-black border rounded-xl "
        >
          <option value="">Seçiniz</option>
          <option value="4A">4A</option>
          <option value="4B">4B</option>
          <option value="4C">4C</option>
        </select>
        <input
          type="text"
          name="job"
          className="py-2.5 px-4  outline-none text-white placeholder:text-white bg-black border rounded-xl "
          placeholder="Meslek Giriniz..."
          onChange={changeHandle}
          value={newEmp.job}
        />
      </form>
      <div className="w-full ">
        <button
          type="submit"
          onClick={addNewEmp}
          className="flex justify-center text-white items-center px-4 py-2 border w-full rounded-xl mt-5 hover:bg-[#181818]"
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default Form;
