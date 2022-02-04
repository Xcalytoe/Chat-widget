import styled from "styled-components";

export const ChatBox = styled.div`
  position: fixed;
  width: 352px;
  max-height: 616px;
  height: calc(100% - 100px);
  z-index: 2147483002;
  right: 20px;
  bottom: 100px;
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid red;
  animation: content 0.3s ease-in-out 1 normal;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @keyframes content {
    from {
      opacity: 0;
      transform: translateY(5%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @media only screen and (max-width: 676px) {
    width: 100%;
    right: auto;
  }
`;

export const ChatIconBtn = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2147483002;
  background: #78a431;
  transition: all 0.3s;
  border: none;
  outline: none;
  box-shadow: none;
  svg {
    transition: all 0.3s;
  }
  @keyframes content {
    from {
      opacity: 0;
      transform: translateY(5%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const ChatHeader = styled.header`
  background: #78a431;
  width: 100%;
  height: 143px;
  div {
    column-gap: 6px;
  }
  .chat-header {
    justify-content: space-between;
    padding-top: 30px;
    padding-left: 12px;
    padding-right: 12px;

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #ffffff;
      margin-bottom: 1;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #cbdfab;
    }
  }
`;

export const ChatHeaderBtn = styled.button`
  background: #cbdfab;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  svg {
    transition: all 0.3s;
    transform: scale(1);
  }
  &:hover {
    transition: all 0.3s;
    svg {
      transition: all 0.3s;
      transform: scale(1.08);
      path,
      rect {
        transition: all 0.3s;
        fill: hsl(83, 54%, 32%);
      }
    }
  }
`;

export const ChatMainBody = styled.main`
  position: absolute;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: calc(100% - 24px);
  max-height: 509px;
  max-height: 478px;
  height: 100%;
  z-index: 100;
  left: 12px;
  bottom: 17px;
  overflow: hidden;
  padding-top: 24px;
  .chat-box {
    padding-left: 20px;
    overflow-y: auto;
    max-height: 450px;
    height: calc(100% - 60px);
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #78a431;
      margin-bottom: 21px;
    }
  }
`;
export const ChatTextarea = styled.label`
  position: relative;
  margin-bottom: 11px;
  display: block;
  height: 39px;
  margin-top: 10px;
  width: calc(100% - 40px);
  left: 20px;
  input {
    border: 1px solid #cbdfab;
    box-sizing: border-box;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 58px;
  }
`;
export const ChatText = styled.div``;
