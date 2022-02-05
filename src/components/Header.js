import React from "react";
import { ChatHeader, ChatBtn } from "./styles/ChatBox.styled";

export default function Header({ handleOpen }) {
  // This function is useless, just go straight and do onClick={handleClose}
  const handleClose = () => {
    handleOpen(); // close chat
  };
  return (
    <ChatHeader>
      <div className="flex chat-header">
        <ChatBtn onClick={handleClose} size={28} radius={4}>
          {back}
        </ChatBtn>
        <div> {/* Seeing empty divs like this gives me goosebump, i know it is flex-item but it would be nice if it is stated, <div className="flex-item"> */}
          <h2>Start your conversation</h2>
          <p>Penny is set!</p>
        </div>
        <div className="flex">
          {/* Instead of this unregulated props of size and radius, you can instead use `size` = 'large' | 'medium' | 'small' etc
            This way your styles will be consistent and any change made in the future will be consistent
          */}
          <ChatBtn onClick={handleClose} size={24} radius={3}>
            {minimise}
            {/* This should be <MiniseIcon />  or <Icon name="minise" /> this ties to my comment on why this should be a component not a variable */}
          </ChatBtn>
          <ChatBtn onClick={handleClose} size={24} radius={3}>
            {close}
          </ChatBtn>
        </div>
      </div>
    </ChatHeader>
  );
}

// all this should be components and not constants
const back = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6869 2.97977C10.8644 3.15729 10.8805 3.43506 10.7353 3.6308L10.6869 3.68688L6.37398 8L10.6869 12.3131C10.8644 12.4906 10.8805 12.7684 10.7353 12.9641L10.6869 13.0202C10.5094 13.1977 10.2316 13.2139 10.0358 13.0686L9.97976 13.0202L5.31309 8.35355C5.13558 8.17604 5.11944 7.89826 5.26468 7.70252L5.31309 7.64644L9.97976 2.97977C10.175 2.78451 10.4916 2.78451 10.6869 2.97977Z"
      fill="#78A431"
    />
  </svg>
);

const minimise = (
  <svg
    width="12"
    height="1"
    viewBox="0 0 12 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="12" height="1" fill="#78A431" />
  </svg>
);

const close = (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.99821 3.08899L1.31023 0.40101L0.542176 1.16907L3.23015 3.85704L0.541796 6.5454L1.30985 7.31345L3.99821 4.6251L6.68663 7.31352L7.45468 6.54546L4.76626 3.85704L7.4543 1.169L6.68625 0.400946L3.99821 3.08899Z"
      fill="#78A431"
    />
  </svg>
);
