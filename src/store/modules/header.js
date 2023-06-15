import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isShow: false,
  },
  reducers: {
    changeShow(state, { payload }) {
      state.isShow = false;
    },
    btnChangeShow(state, { payload }) {
      state.isShow = !state.isShow;
    },
  },
});
export const { changeShow, btnChangeShow } = headerSlice.actions;
export default headerSlice.reducer;
