import React, { memo } from "react";

import { SetcionV1 } from "./style";
import SectionHeader from "@/components/section-header";
import Item from "../room-item";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <SetcionV1>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <Item roomList={infoData.list} />
    </SetcionV1>
  );
});

export default HomeSectionV1;
