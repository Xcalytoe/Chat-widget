import React, { useState, useEffect, useRef } from "react";
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
// in my opinion this TextOne and TextTwo should be a component this is because they are more similar in use than different
// If you dont want that then atleast they should share a lot of components

export default function ChatBody() {
  const [msg, setMsg] = useState("");
  const [allChats, setAllChats] = useState([]);
  const [msgCount, setMsgCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [effect, setEffect] = useState(false);// WTF is setEffect
  const scroll = useRef();

  // User a form libary => react-final-form, formik,
  const onChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSendMsg = (e) => {
    e.preventDefault();
    // use exit early
    /*
    if(!message){
      return
    }
     Then you continu with your message saving
    */
    if (msg) {
      // save message
      setAllChats([...allChats, { msg: msg }]);
      setMsg("");
      setLoading(true);
      scroll.current.scrollIntoView({ behavior: "smooth" });
      //   detect when a user sends msg
      setEffect(true);
    }
  };

  useEffect(() => {
    // trigger admin function
    effect && handleSendMsgAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effect]);

  // you have have an useEffect like this
  /*
  usEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [allChats])
  You really not need to call it manually
  As the possible ways of add/remove the messages can increase and you will not need to call this again
  */

  const handleSendMsgAdmin = () => {
    setEffect(false);

    // save message
    setTimeout(() => {
      // set loading to false // Really?, you have to tell someone you are setting loading to false
      setLoading(false);
      setAllChats([...allChats, dummyMessage[msgCount]]);
      /*
      You should have function to handle this message insertion
      const addToChat = (message) => {
      setAllChats([...allChats, message]);
      }
      then you will simply call
      addToChat(dummyMessage[msgCount])
      */
      return; // why are you returning here
    }, 5000);
    // you should always check for the vakue of useRef before using it
    scroll.current.scrollIntoView({ behavior: "smooth" });

    // increase count for admin's array index
    msgCount === 2 ? setMsgCount(0) : setMsgCount(msgCount + 1);
    //  setMsgCount(msgCount === 2 ? 0 : msgCount + 1;
    // or
    //  setMsgCount((msgCount + 1) % 2);
  };
// This shoukd be a new component
  const chatDisplay = allChats.map((val, index) => {
    // The `val` should be named `chatItem`
    if (val.type === "admin") {
      return <TextOne text={val.msg} key={index} />;
    } else {
      // YOu dont need and else when you've returned
      const date = new Date();
      const options = {
        // better name const dateOptions = {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
      };
      return (
        <TextTwo
          text={val.msg}
          // this kind of date manipulation should be done in a service for easy re-use
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
        {/* to show that admin is typing  */} {/* Needless variable */}
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
        <div ref={scroll}></div>
        {/* <div ref={scroll} />*/}
      </div>
      {/* This form down should be its own component */}
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
