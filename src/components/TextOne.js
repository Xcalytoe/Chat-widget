import React from "react";
import { ChatText1 } from "./styles/ChatBox.styled";
import profile from "../assets/images/profile.jpg";
/*
import profileImage from "../assets/images/profile.jpg";
*/

export default function TextOne({ text }) {
  return (
    <ChatText1>
{/* If you want to use classes, use classes, if you want to use stlyed use it, Pick one and stick to it       */}
      <div className="flex chat-flex">
        <div className="img-con">
          <img src={profile} alt="profile" />
        </div>
        <div className="chat-item">
          <span>Penny</span>
          <p>{text}</p>
        </div>
      </div>
    </ChatText1>
  );
}
