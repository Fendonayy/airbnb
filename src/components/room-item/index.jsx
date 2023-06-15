import React, { memo } from "react";

import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper verifycolor={itemData?.verify_info?.text_color || "#767676"}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
          <div>{itemData.verify_info.messages.join("·")}</div>
        </div>
        <div className="name">
          <div>{itemData.name}</div>
        </div>
        <div className="price">
          <div>{itemData.price_format}</div>
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
