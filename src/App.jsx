import React, { useState } from "react";

const App = () => {
  const [employee, setEmployee] = useState({
    name: "",
    surname: "",
    age: "",
    insuranceType: "",
    job: "",
  });

  const [users, setUsers] = useState([]);

  const addNewEmployee = (e) => {
    e.preventDefault();

    const newUser = {
      name: employee.name,
      surname: employee.surname,
      age: employee.age,
      insuranceType: employee.insuranceType,
      job: employee.job,
    };

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
    <div>
      <form onSubmit={addNewEmployee}>
        <label>Name</label>
        <input type="text" value={employee.name} onChange={nameHandler} />
        <label>Surname</label>
        <input type="text" value={employee.surname} onChange={surNameHandler} />
        <label>Age</label>
        <input type="text" value={employee.age} onChange={ageHandler} />
        <label>Insurance</label>
        <input
          type="text"
          value={employee.insuranceType}
          onChange={insuranceHandler}
        />
        <label>Job</label>
        <input type="text" value={employee.job} onChange={jobHandler} />
        <button type="submit">Submit</button>
      </form>

      <div>
        {users.map((user, i) => (
          <div key={i}>
            <h1>Name: {user.name}</h1>
            <h1>Surname: {user.surname}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Insurance: {user.insuranceType}</h1>
            <h1>Job: {user.job}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
