import React, { useEffect, useState } from "react";
import axios, { messagesRoute } from "../api/api";
import { useSelectedUser } from "./CurrentSelectedUserContext";
import { useUserInfo } from "./userInfoContex";
import { useContext } from "react";

const MessageContext = React.createContext();

export function useMessage() {
  return useContext(MessageContext);
}

function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const userInfo = useUserInfo();
  const [currentSelectedUser] = useSelectedUser();

  useEffect(() => {
    async function getMessages(userId) {
      const res = await axios.get(
        `${messagesRoute}/${userId}/${currentSelectedUser}`
      );
      const messageList = res.data;
      setMessages(messageList);
    }
    if (userInfo?._id && currentSelectedUser) getMessages(userInfo._id);
  }, [currentSelectedUser, userInfo?._id]);

  return (
    <MessageContext.Provider value={[messages, setMessages]}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageProvider;
