import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import addSlice from "./slices/addSlice";

export const reduxStore = configureStore({
  reducer: {
    theme: themeSlice,
    list: addSlice,
  },
});

export default reduxStore;
