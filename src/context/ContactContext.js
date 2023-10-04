import React, { useContext, useEffect, useState } from "react";
import axios, { getContactsRoute } from "../api/api";
import { useUserInfo } from "./userInfoContex";
import { useLastChat } from "./LastChatContext";
import { useSocket } from "./SocketContext";
import sortContacts from "../utils/sortContacts";
import updateLastChatInContacts from "../utils/updateLastChatInContacts";

const ContactContext = React.createContext();

export function useContacts() {
  return useContext(ContactContext);
}

export default function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const userInfo = useUserInfo();
  const [lastChatInput] = useLastChat();
  const socket = useSocket();

  console.log("chekc");
  useEffect(() => {
    if (socket) {
      socket.on("recieveMessage", (lastChatInput) => {
        if (contacts.length) {
          const updatedContacts = updateLastChatInContacts(
            contacts,
            lastChatInput
          );
          sortContacts(updatedContacts);
          setContacts(updatedContacts);
        }
      });
    }
  }, [socket, contacts]);

  useEffect(() => {
    if (lastChatInput && contacts) {
      const updatedContacts = updateLastChatInContacts(contacts, lastChatInput);
      sortContacts(updatedContacts);
      setContacts(updatedContacts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
