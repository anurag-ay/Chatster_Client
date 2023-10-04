import React, { useContext, useEffect, useState } from "react";
import axios, { getContactsRoute } from "../api/api";
import { useUserInfo } from "./userInfoContex";
import { useLastChat } from "./LastChatContext";

const ContactContext = React.createContext();

export function useContacts() {
  return useContext(ContactContext);
}

export default function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const userInfo = useUserInfo();
  const [lastChatInput] = useLastChat();

  useEffect(() => {
    if (lastChatInput) {
      const updatedContacts = contacts.map((contact) => {
        if (contact._id === lastChatInput.receiver) {
          return {
            ...contact,
            lastChatTimestamp: lastChatInput.timestamp,
            lastChat: lastChatInput.message,
          };
        }
        return contact;
      });

      updatedContacts.sort(
        (a, b) => new Date(b.lastChatTimestamp) - new Date(a.lastChatTimestamp)
      );
      setContacts(updatedContacts);
    }
  }, [lastChatInput]);

  useEffect(() => {
    async function getContacts(_id) {
      const res = await axios.get(`${getContactsRoute}/${_id}`);
      const contactsList = res.data;
      contactsList.sort(
        (a, b) => new Date(b.lastChatTimestamp) - new Date(a.lastChatTimestamp)
      );
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
