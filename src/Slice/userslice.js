import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "userslice",
  initialState: {
    user: null,
  },
  reducers: {
    userData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userData } = userslice.actions;
export default userslice.reducer;
