import React, { useContext, useEffect, useState } from "react";
import axios, { authRoute } from "../api/api";

export const UserInfoContext = React.createContext(undefined);

export function useUserInfo() {
  return useContext(UserInfoContext);
}

function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    async function getUserInfoFromToken(token) {
      const res = await axios.post(authRoute, { token });
      const userData = res.data;
      setUserInfo(userData);
    }

    getUserInfoFromToken(token);
  }, []);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoProvider;
