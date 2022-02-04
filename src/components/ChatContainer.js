import React, { useState } from "react";
import { ChatBox, ChatIconBtn } from "./styles/ChatBox.styled";
import Header from "./Header";
import ChatBody from "./ChatBody";
import { closeIcon, openIcon } from "../constants";

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
