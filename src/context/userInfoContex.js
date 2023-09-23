import React, { useContext, useEffect, useState } from "react";
import axios, { authRoute } from "../api/api";

const UserInfoContext = React.createContext();

export function useUserInfo() {
  return useContext(UserInfoContext);
}

function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!token) {
      const getToken = JSON.parse(window.localStorage.getItem("token"));
      setToken(getToken);
    }
  }, [token]);

  useEffect(() => {
    async function getUserInfoFromToken() {
      const res = await axios.post(authRoute, { token });
      const userData = res.data;
      setUserInfo((prevState) => ({ ...prevState, ...userData }));
    }
    if (token) getUserInfoFromToken();
  }, [token]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoProvider;
