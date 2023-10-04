export default function sortContacts(contacts) {
  contacts.sort(
    (a, b) => new Date(b.lastChatTimestamp) - new Date(a.lastChatTimestamp)
  );
}
