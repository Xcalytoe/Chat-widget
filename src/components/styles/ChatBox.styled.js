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

export const ChatText = styled.div``;
