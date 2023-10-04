import React, { useContext, useState } from "react";

const LastChatContext = React.createContext();

export function useLastChat() {
  return useContext(LastChatContext);
}

function LastChatProvider({ children }) {
  const [lastChatInput, setLastChatInput] = useState(null);

  return (
    <LastChatContext.Provider value={[lastChatInput, setLastChatInput]}>
      {children}
    </LastChatContext.Provider>
  );
}

export default LastChatProvider;
