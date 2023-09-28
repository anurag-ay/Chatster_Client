import React, { useContext, useState } from "react";

const LastMessageContext = React.createContext();

export function useLastMessage() {
  return useContext(LastMessageContext);
}

export default function LastMessageProvider({ children }) {
  const [lastMessage, setLastMessage] = useState(null);
  return (
    <LastMessageContext.Provider value={[lastMessage, setLastMessage]}>
      {children}
    </LastMessageContext.Provider>
  );
}
