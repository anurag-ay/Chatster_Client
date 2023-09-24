import { io } from "socket.io-client";
import React, { useContext, useEffect, useRef } from "react";

const SocketContext = React.createContext(undefined);

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketContextProvider({ children }) {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:5000");
  }, []);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
}
