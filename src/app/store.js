import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../Slice/themeSlice";
import userslice from "../Slice/userslice";
import { api } from "./api/api";

export default configureStore({
  reducer: {
    theme: themeSlice,
    user: userslice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gdmw) => gdmw().concat(api.middleware),
});
