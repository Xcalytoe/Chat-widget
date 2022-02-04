import React, { useState, useEffect } from "react";
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
  const [effect, setEffect] = useState(false);

  const onChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (msg) {
      // save message
      setAllChats([...allChats, { msg: msg }]);
      setMsg("");
      setLoading(true);
      //   detect when a user sends msg
      setEffect(true);
    }
  };

  useEffect(() => {
    // trigger admin function
    effect && handleSendMsgAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effect]);

  const handleSendMsgAdmin = () => {
    setEffect(false);

    // save message
    setTimeout(() => {
      // set loading to false
      setLoading(false);
      setAllChats([...allChats, dummyMessage[msgCount]]);
      return;
    }, 5000);

    // increase count for admin's array index
    msgCount === 2 ? setMsgCount(0) : setMsgCount(msgCount + 1);
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
