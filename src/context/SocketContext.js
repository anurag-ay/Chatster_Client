import { io } from "socket.io-client";
import React, { useContext, useEffect, useRef } from "react";
import { useUserInfo } from "./userInfoContex";
import { BASE_URL } from "../api/api";

const SocketContext = React.createContext(undefined);

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketContextProvider({ children }) {
  const socket = useRef();
  const userInfo = useUserInfo();

  useEffect(() => {
    socket.current = io(BASE_URL);
  }, []);

  useEffect(() => {
    if (userInfo?._id && socket) socket.current.emit("addUser", userInfo._id);
  }, [userInfo?._id]);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
}
