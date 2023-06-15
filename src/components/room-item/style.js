import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 25%;
  padding: 0 8px;
  margin: 8px 0;
  .inner {
    width: 100%;
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    color: ${(props) => props.verifycolor};
    padding: 5px 0;
  }
  .name {
    padding: 5px 0;
  }
  .price {
    color: ${(props) => props.verifycolor};
  }
`;
