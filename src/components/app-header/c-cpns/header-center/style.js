import { styled } from "styled-components";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff385c;
  .search {
    /* color: #ff385c */
    color: #fff;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #ff385c;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-evenly;
    height: 48px;
    width: 300px;
    border: 1px solid;
    border-radius: 25px;
    box-shadow: 0 0 rgba(0, 0, 0, 0.5);
    ${(props) => props.theme.mixin.boxShadow}
    .left,
    .center {
      font-weight: 600;
      border-right: 1px solid rgb(113, 113, 113);
      padding-right: 15px;
    }
  }
`;
