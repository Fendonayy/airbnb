import { styled } from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;

  .right {
    margin-right: 80px;
    display: flex;
    align-items: center;
    .btns {
      margin-right: 30px;
      cursor: pointer;
      transition: box-shadow 0.3s ease-in-out;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    }
    .profile {
      width: 77px;
      height: 42px;
      cursor: pointer;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 25px;
      box-shadow: 0 0 rgba(0, 0, 0, 0.5);
      ${(props) => props.theme.mixin.boxShadow}
      .content {
        display: flex;
        align-items: center;
        height: 42px;
        justify-content: space-evenly;
        color: rgb(113, 113, 113);
      }
    }
  }
  .dialog {
    position: absolute;
    width: 250px;
    height: 200px;
    top: 60px;
    background-color: #fff;
    left: 360px;
    box-shadow: 0 11px 11px -13px rgba(0, 0, 0, 0.8);
    .top,
    .bottom {
      padding: 10px 0;
      /* border-bottom: 1px solid rgb(221, 221, 221); */
      /* height: 50%; */
      .item {
        padding: 0 16px;
        height: 40px;
        line-height: 40px;
        &:hover {
          background-color: rgb(247, 247, 247);
        }
      }
      /* .enroll {
        font-weight: 600;
        height: 50%;
        display: flex;
        align-items: center;
        padding-left: 20px;
        &:hover {
          background-color: rgb(247, 247, 247);
        }
      }
      .login {
        height: 50%;
        display: flex;
        align-items: center;
        padding-left: 20px;
        &:hover {
          background-color: rgb(247, 247, 247);
        }
      } */
    }
    .top {
      border-bottom: 1px solid rgb(221, 221, 221);
    }
    /* .bottom {
      height: 50%;
      .assistance,
      .houses {
        height: 50%;
        display: flex;
        align-items: center;
        padding-left: 20px;
        &:hover {
          background-color: rgb(247, 247, 247);
        }
      }
    } */
  }
`;
