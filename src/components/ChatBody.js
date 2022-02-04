import React, { useState } from "react";
import {
  ChatMainBody,
  ChatTextarea,
  ChatBtn,
  ChatText1,
} from "./styles/ChatBox.styled";
import { emojiBtn, sendBtn, attachBtn, dummyMessage } from "../constants";
import profile from "../assets/images/profile.jpg";
import TextOne from "./TextOne";
import TextTwo from "./TextTwo";

export default function ChatBody() {
  const [msg, setMsg] = useState("");
  const [allChats, setAllChats] = useState([]);
  const [msgCount, setMsgCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (msg) {
      // save message
      setAllChats([...allChats, { msg: msg }]);
      setMsg("");
      console.log(allChats, "handleSendMsg");
      setLoading(true);

      // trigger admin function
      setTimeout(() => handleSendMsgAdmin(), 5000);
      return;
    }
  };

  const handleSendMsgAdmin = () => {
    // save message
    console.log(allChats, "here");
    // setTimeout(() => setAllChats([...allChats, dummyMessage[msgCount]]), 5000);

    // increase count
    setMsgCount(msgCount + 1);
    // set loading to false
    setLoading(false);
  };

  const chatDisplay = allChats.map((val, index) => {
    if (val.type === "admin") {
      return <TextOne text={val.msg} key={index} />;
    } else {
      const date = new Date();
      const options = {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
      };
      return (
        <TextTwo
          text={val.msg}
          date={date.toLocaleTimeString("en-us", options)}
          key={index}
        />
      );
    }
  });
  return (
    <ChatMainBody>
      <div className="chat-box">
        <h2>Start a conversation</h2>
        {chatDisplay}
        {/* to show that admin is typing  */}
        {loading && (
          <ChatText1>
            <div className="chat-flex">
              <div>
                <img src={profile} alt="profile" />
              </div>
              <span> typing...</span>
            </div>
          </ChatText1>
        )}
      </div>
      <form onSubmit={handleSendMsg}>
        <ChatTextarea>
          <input
            type="text"
            name="message"
            onChange={onChange}
            value={msg}
            placeholder="Type your message here"
          />
          <div className="flex items-center btn-group">
            <button>{attachBtn}</button>
            <button>{emojiBtn}</button>
          </div>
          <div className="send-btn">
            <ChatBtn size={31} color="#78A431" radius={5}>
              {sendBtn}
            </ChatBtn>
          </div>
        </ChatTextarea>
      </form>
    </ChatMainBody>
  );
}
