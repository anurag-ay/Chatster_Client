import React, { useContext, useEffect, useState } from "react";
import axios, { getContactsRoute } from "../api/api";
import { useUserInfo } from "./userInfoContex";

const ContactContext = React.createContext();

export function useContacts() {
  return useContext(ContactContext);
}

export default function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const userInfo = useUserInfo();

  useEffect(() => {
    async function getContacts(_id) {
      const res = await axios.get(`${getContactsRoute}/${_id}`);
      const contactsList = res.data;
      setContacts(contactsList);
    }
    const _id = userInfo?._id;
    if (_id) getContacts(_id);
  }, [userInfo?._id]);
  return (
    <ContactContext.Provider value={[contacts, setContacts]}>
      {children}
    </ContactContext.Provider>
  );
}
