import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import headerReducer from "./modules/header";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    header: headerReducer,
  },
});
export default store;
