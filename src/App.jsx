import React, { useState, useEffect } from "react";

const App = () => {
  const [employee, setEmployee] = useState({
    name: "",
    surname: "",
    age: "",
    insuranceType: "",
    job: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("Kullanıcı:"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const addNewEmployee = (e) => {
    e.preventDefault();

    const newUser = {
      name: employee.name,
      surname: employee.surname,
      age: employee.age,
      insuranceType: employee.insuranceType,
      job: employee.job,
    };

    localStorage.setItem("Kullanıcı:", JSON.stringify([...users, newUser]));

    setUsers((prevState) => [...prevState, newUser]);

    setEmployee({
      name: "",
      surname: "",
      age: "",
      insuranceType: "",
      job: "",
    });
  };

  const nameHandler = (e) => {
    setEmployee({ ...employee, name: e.target.value });
  };

  const surNameHandler = (e) => {
    setEmployee({ ...employee, surname: e.target.value });
  };

  const ageHandler = (e) => {
    setEmployee({ ...employee, age: e.target.value });
  };

  const insuranceHandler = (e) => {
    setEmployee({ ...employee, insuranceType: e.target.value });
  };

  const jobHandler = (e) => {
    setEmployee({ ...employee, job: e.target.value });
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12 mt-7">
      <div className="bg-card p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold mb-4 flex flex-col">
          Create new user but added insurance type! :) v0.1{" "}
          <span className="text-xs text-[#888888]">made by ozmberkan</span>
        </h2>
        <hr className="py-3" />
        <form className="space-y-4" onSubmit={addNewEmployee}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Enter name"
                value={employee.name}
                className="border p-2 rounded"
                onChange={nameHandler}
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="surname">Surname</label>
              <input
                id="surname"
                placeholder="Enter surname"
                value={employee.surname}
                className="border p-2 rounded"
                onChange={surNameHandler}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                value={employee.age}
                type="number"
                placeholder="Enter age"
                className="border p-2 rounded"
                onChange={ageHandler}
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="insuranceType">Insurance Type</label>
              <select
                id="insuranceType"
                placeholder="Enter insurance type"
                className="border p-2 rounded"
                value={employee.insuranceType}
                onChange={insuranceHandler}
              >
                <option value="" disabled>
                  Seçiniz
                </option>
                <option value="4A">4A</option>
                <option value="4B">4B</option>
                <option value="4C">4C</option>
              </select>
            </div>
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="job">Job</label>
            <input
              id="job"
              placeholder="Enter job"
              className="border p-2 rounded"
              value={employee.job}
              onChange={jobHandler}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#18181B] text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="font-bold grid grid-cols-5 gap-4 bg-muted p-4 rounded-md bg-zinc-200 text-center">
          <span>Name</span>
          <span>Surname</span>
          <span>Age</span>
          <span>Insurance Type</span>
          <span>Job</span>
        </div>
        <div className="space-y-4 ">
          {users.map((user, index) => (
            <div
              className="font-medium grid grid-cols-5 gap-4 bg-muted p-4 rounded-md text-center text-[#888888]"
              key={index}
            >
              <span>{user.name}</span>
              <span>{user.surname}</span>
              <span>{user.age}</span>
              <span>{user.insuranceType}</span>
              <span>{user.job}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
