import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "userslice",
  initialState: {
    value: false,
    custUserName: "yahya",
  },
  reducers: {
    login: (state) => {
      state.value = true;
      state.custUserName = "yahya";
    },
    logout: (state) => {
      state.value = false;
      state.custUserName = null;
    },
  },
});

export const { login, logout } = userslice.actions;
export default userslice.reducer;
