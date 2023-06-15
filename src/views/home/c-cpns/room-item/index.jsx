import React, { memo } from "react";

import { ItemWrapper } from "./style";
import RoomItem from "@/components/room-item";

const Item = memo((props) => {
  const { roomList } = props;
  return (
    <ItemWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} />;
      })}
    </ItemWrapper>
  );
});

export default Item;
