import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true,
  reducers: {
    toggleTheme: (state) => {
      return (state = !state);
    },
  },
});



export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;