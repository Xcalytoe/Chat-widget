import React, { useState } from "react";
import { ChatBox, ChatIconBtn } from "./styles/ChatBox.styled";
import Header from "./Header";
import ChatBody from "./ChatBody";

export default function ChatContainer() {
  const [openChat, setOpenChat] = useState(false);

  // toggle chat box
  const handleOpen = () => {
    setOpenChat(!openChat);
  };
  return (
    <>
      {!openChat && ( // display only when chat is open
        <ChatBox>
          <Header handleOpen={handleOpen} />
          <ChatBody />
        </ChatBox>
      )}
      <ChatIconBtn onClick={handleOpen}>
        {openChat ? closeIcon : openIcon}
      </ChatIconBtn>
    </>
  );
}

const openIcon = (
  <svg
    width="28"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 32C28 32 23.2863 30.1451 19.4728 28.6592H3.43749C1.53922 28.6592 0 27.0272 0 25.0144V3.6448C0 1.632 1.53922 0 3.43749 0H24.5615C26.4598 0 27.999 1.632 27.999 3.6448V22.0491L28 32ZM23.8614 20.0181C23.5309 19.6105 22.9541 19.5634 22.5692 19.9125C22.5392 19.9392 19.5538 22.5941 13.999 22.5941C8.51322 22.5941 5.48178 19.9584 5.42778 19.9104C5.04295 19.5629 4.46761 19.6105 4.13759 20.0171C3.97913 20.2125 3.90045 20.4673 3.91904 20.7249C3.93764 20.9825 4.05197 21.2215 4.23661 21.3888C4.37863 21.5168 7.77411 24.5387 13.999 24.5387C20.2249 24.5387 23.6204 21.5168 23.7624 21.3888C23.9467 21.2216 24.0609 20.9828 24.0795 20.7255C24.098 20.4681 24.0196 20.2135 23.8614 20.0181Z"
      fill="white"
    />
  </svg>
);

const closeIcon = (
  <svg
    width="28"
    height="25"
    viewBox="0 0 28 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.203125 8.79712L3.29712 5.70312L14.0001 16.4061L24.7031 5.70312L27.7971 8.79712L14.0001 22.5941L0.203125 8.79712Z"
      fill="white"
    />
  </svg>
);
