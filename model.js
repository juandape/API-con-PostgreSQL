const table = require("@makeitrealcamp/db-mock");
const r1 = table.insert({ name: "Tony Stark", number: "25-344567" });
const r2 = table.insert({ name: "Steve Rogers", number: "24-334543" });
const r3 = table.insert({ name: "Natasha Romanoff", number: "45-643489" });
const r4 = table.insert({ name: "Bruce Banner", number: "76-904567" });

function getAllContacts() {
  const records = table.findAll();
  return records;
}

function getContactsById(id) {
  const record = table.findById(id);
  return record;
}

function createContact(contact) {
  const record = table.insert(contact);
  return record;
}

function editContact(id, contact) {
  const contactEdit = {
    id,
    ...contact,
  };
  const record = table.update(contactEdit);
  return record;
}

function deleteContact(id) {
  const record = table.remove(id);
  return record;
}

function getLength() {
  const records = table.findAll();
  return records.length;
}

module.exports = {
  getAllContacts,
  getContactsById,
  createContact,
  editContact,
  deleteContact,
  getLength,
};
