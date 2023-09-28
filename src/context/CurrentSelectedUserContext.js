import React, { useState, useContext } from "react";

const CurrentSelectedUserContext = React.createContext();

export function useSelectedUser() {
  return useContext(CurrentSelectedUserContext);
}

export default function CurrentSelectedUserProvider({ children }) {
  const [currentSelectedUser, setCurrentSelectedUser] = useState(null);

  function setSelectedUser(id) {
    setCurrentSelectedUser(id);
  }
  return (
    <CurrentSelectedUserContext.Provider
      value={[currentSelectedUser, setSelectedUser]}
    >
      {children}
    </CurrentSelectedUserContext.Provider>
  );
}
