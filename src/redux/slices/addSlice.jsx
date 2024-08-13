import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  newEmp: {
    tcNo: "",
    name: "",
    surname: "",
    date: "",
    age: "",
    iType: "",
    job: "",
    dlicense: "",
  },
};

export const addSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setNewEmp: (state, action) => {
      state.newEmp = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    handleChange: (state, action) => {
      const { value, name } = action.payload;
      state.newEmp = { ...state.newEmp, [name]: value };
    },
    addEmployee: (state) => {
      const isValid = Object.values(state.newEmp).every((x) => x !== "");
      if (isValid) {
        state.list = [...state.list, state.newEmp];
        state.newEmp = initialState.newEmp;
        localStorage.setItem("employee", JSON.stringify(state.list));
      }
    },
    deleteEmp: (state, action) => {
      state.list = state.list.filter((emp) => emp.tcNo !== action.payload);
      localStorage.setItem("employee", JSON.stringify(state.list));
    },
  },
});

export const { handleChange, setList, setNewEmp, addEmployee, deleteEmp } =
  addSlice.actions;

export default addSlice.reducer;
