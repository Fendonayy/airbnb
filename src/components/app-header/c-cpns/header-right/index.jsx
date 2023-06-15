import React, { memo } from "react";
import { btnChangeShow } from "@/store/modules/header";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  const { isShow } = useSelector(
    (state) => ({
      isShow: state.header.isShow,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  function handleShow(event) {
    dispatch(btnChangeShow());
    event.stopPropagation();
  }
  return (
    <RightWrapper>
      <div className="right">
        <div className="btns">
          <IconGlobal />
        </div>
        <div className="profile" onClick={handleShow}>
          <div className="content">
            <IconMenu />
            <IconAvatar />
          </div>
        </div>
      </div>
      {isShow && (
        <div className="dialog">
          <div className="top">
            <div className="item register">注册</div>
            <div className="item login ">登录</div>
          </div>
          <div className="bottom">
            <div className="item">来爱彼迎发布房源</div>
            <div className="item">帮助</div>
          </div>
        </div>
      )}
    </RightWrapper>
  );
});

export default HeaderRight;
