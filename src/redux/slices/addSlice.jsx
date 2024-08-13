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

    handleChange: (state, action) => {
      const { value, name } = action.payload;
      state.newEmp = { ...state.newEmp, [name]: value };
    },

    addEmployee: (state) => {
      state.list = [...state.list, state.newEmp];
      state.newEmp = initialState.newEmp;
    },
  },
});

export const { handleChange, setNewEmp, addEmployee } = addSlice.actions;

export default addSlice.reducer;
