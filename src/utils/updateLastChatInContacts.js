export default function updateLastChatInContacts(contacts, lastChatInput) {
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

  return updatedContacts;
}
