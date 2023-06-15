import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="content">
        <div className="left">任何地方</div>
        <div className="center">任意一周</div>
        <div className="right">添加房客</div>
        <div className="search">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
