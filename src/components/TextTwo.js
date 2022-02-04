import React from "react";
import { ChatText2 } from "./styles/ChatBox.styled";

export default function TextTwo({ text, date }) {
  return (
    <ChatText2>
      <div>
        <p>{text}</p>
        <span>{date}</span>
      </div>
    </ChatText2>
  );
}
