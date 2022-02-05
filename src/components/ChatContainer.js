import React, { useState } from "react";
import { ChatBox, ChatIconBtn } from "./styles/ChatBox.styled";
import Header from "./Header";
import ChatBody from "./ChatBody";
import { closeIcon, openIcon } from "../constants";

export default function ChatContainer() {
  const [openChat, setOpenChat] = useState(false);

  // toggle chat box, You dont need this comment, 
  // Just naming it correctly will do 
  // const toggleChat = () => {
  const handleOpen = () => {
    setOpenChat(!openChat);
  };
  return (
    <>
      {openChat && ( // display only when chat is open // This comment is needless, your comment should be telling why and not what
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

// Personally styles should be scoped it reduces the file travels and it makes it easy to know when the styles are no longer in use