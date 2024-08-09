import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const initialState = {
  users: JSON.parse(localStorage.getItem("employee")) || [],
  user: null,
  filteredUsers: [],
  newEmployee: {
    id: "",
    name: "",
    surname: "",
    bdate: "",
    itype: "",
    job: "",
    dlicense: "",
  },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addNewEmployee: (state) => {
      const isValid = Object.values(state.newEmployee).every((x) => x !== "");
      if (isValid) {
        toast.error("Lütfen tüm alanları doldurunuz.", {
          theme: "dark",
          autoClose: 1000,
        });
      } else {
        const newUser = { ...state.newEmployee, id: nanoid() };
        state.users = [...state.users, newUser];
        state.newEmployee = { ...initialState.newEmployee };
        localStorage.setItem("employee", JSON.stringify(state.users));
        toast.success("Başarıyla kullanıcı veritabanına eklendi!", {
          theme: "dark",
          autoClose: 500,
        });
      }
    },
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.newEmployee = { ...state.newEmployee, [name]: value };
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      localStorage.setItem("employee", JSON.stringify(state.users));
    },
    filteredUser: (state, action) => {
      const filterText = action.payload.toLowerCase();
      state.filteredUsers = state.users.filter((user) =>
        `${user.name} ${user.surname} ${user.bdate} ${user.itype} ${user.job}`
          .toLowerCase()
          .includes(filterText.toLowerCase())
      );
    },
  },
});

export const {
  setUser,
  addNewEmployee,
  handleChange,
  deleteUser,
  filteredUser,
} = userSlice.actions;

export default userSlice.reducer;
