import React, { useContext, useEffect, useState } from "react";
import axios, { decodeTokenRoute } from "../api/api";

import { useNavigate } from "react-router-dom";

export const UserInfoContext = React.createContext(undefined);

export function useUserInfo() {
  return useContext(UserInfoContext);
}

function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const getUserInfoFromToken = async (token) => {
        const res = await axios.post(decodeTokenRoute, { token });
        const userData = res.data;
        setUserInfo(userData);
      };
      getUserInfoFromToken(token);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoProvider;
