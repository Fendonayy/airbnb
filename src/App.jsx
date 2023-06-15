import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import { changeShow } from "./store/modules/header";
import { useDispatch } from "react-redux";

const App = memo(() => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(changeShow());
  }
  return (
    <div className="app" onClick={handleClick}>
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
